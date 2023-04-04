const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob');
const { v1: uuid } = require('uuid');
const multer = require('multer');

const accountName = process.env.AZURE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_ACCOUNT_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

const uploadToBlob = (containerName, fieldName) => {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const storage = multer.memoryStorage();
  const upload = multer({ storage }).single(fieldName);

  return async (req, res, next) => {
    try {
      upload(req, res, async (err) => {
        if (err) {
          return res.status(400).send({ message: err.message });
        }

        const { buffer, originalname } = req.file;
        const fileName = uuid() + '-' + originalname;
        const blobClient = containerClient.getBlockBlobClient(fileName);
        await blobClient.uploadData(buffer);

        const url = blobClient.url;
        req[fieldName] = url;
        next();
      });
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  };
};

module.exports = uploadToBlob;
