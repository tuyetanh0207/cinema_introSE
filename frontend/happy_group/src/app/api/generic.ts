import axios from "axios";
export const baseURL ="https://localhost:8000";
export const baseURL_user = "https://localhost:8000";
//"https://5dlr4.wiremockapi.cloud" ||  "https://localhost:8000/v1"||

export const apiV1 = `${baseURL}/v1`;
export const apiV1_user = `${baseURL_user}/v1`;

export const config = function (token: string) {
  return {
    headers: {
      "content-type": "application/json",
      token: `Bearer ${token}`,
    },
  };
};

export const get = function (url: string, token: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios
      .get(url, config(token))
      .then((res) => {
        // return data
        return resolve({ data: res.data });
      })
      .catch((err) => {
        // return err message
        if (!err.response) return reject(err.message);
        return reject(err.response.data.message);
      })
  );
};

export const post = function (url: string, data: any, token: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios
      .post(url, data, config(token))
      .then((res) => {
        // return data
        console.log("header: ", config(token))
        return resolve({ data: res.data });
      })
      .catch((err) => {
        // return err message
        if (!err.response) return reject(err.message);
        return reject(err.response.data.message);
      })
  );
};

export const put = function (url: string, data: any, token: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios
      .put(url, data, config(token))
      .then((res) => {
        // return data
        return resolve({ data: res.data });
      })
      .catch((err) => {
        // return err message
        if (!err.response) return reject(err.message);
        return reject(err.response.data.message);
      })
  );
};

export const patch = function (url: string, data: any, token: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios
      .patch(url, data, config(token))
      .then((res) => {
        // return data
        return resolve({ data: res.data });
      })
      .catch((err) => {
        // return err message
        if (!err.response) return reject(err.message);
        return reject(err.response.data.message);
      })
  );
};

export const delele = function (url: string, token: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios
      .delete(url, config(token))
      .then((res) => {
        // return data
        return resolve({ data: res.data });
      })
      .catch((err) => {
        // return err message
        if (!err.response) return reject(err.message);
        return reject(err.response.data.message);
      })
  );
};
