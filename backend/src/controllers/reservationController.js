const QRCode = require('qrcode');
const Reservation = require('../models/reservation');


const reservationController = {
  createReservation: async (req, res) => {
    try {
      // Validate the request body
      const { userId, name, phoneNumber, email, showtimeId, seats, totalPrice } = req.body;
      const errors = [];
      if (!userId) {
        errors.push('userId is required');
      }
      if (!name) {
        errors.push('name is required');
      }
      if (!phoneNumber) {
        errors.push('phoneNumber is required');
      }
      if (!email) {
        errors.push('email is required');
      }
      if (!showtimeId) {
        errors.push('showtimeId is required');
      }
      if (!seats) {
        errors.push('seats is required');
      }
      if (!totalPrice) {
        errors.push('totalPrice is required');
      }

      // If there are any errors, return them to the client
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      // Create the reservation
      const reservation = new Reservation({
        userId,
        name,
        phoneNumber,
        email,
        showtimeId,
        seats,
        totalPrice,
        status: 'Pending',
      });
      await reservation.save();

      // Generate a QR code with the link to change the status of the reservation to "Booked"
      const qrcode = await QRCode.toDataURL(`${process.env.HOST}/reservations/${reservation.id}/book`);

      // Prompt the user to pay for the reservation
      res.status(200).json({
        reservation,
        qrcodeImage: qrcode,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  // Route to change the status of the reservation to "Booked"
  bookReservation: async (req, res) => {
    try {
      const { reservationId } = req.params;
      const reservation = await Reservation.findById(reservationId);
      if (!reservation) {
        return res.status(404).json({ error: 'Reservation not found' });
      }
      reservation.status = 'Booked';
      await reservation.save();
      res.status(200).json({ message: 'Reservation booked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },
  //     getAllReservations: async (req, res) => {
  //         try {
  //             const reservations = await Reservation.find({});
  //             res.status(200).json(reservations);
  //         } catch (e) {
  //             res.status(400).send(e);
  //         }
  //     },

  //     // Get reservation by id
  //     getReservationById: async (req, res) => {
  //         const _id = req.params.id;
  //         try {
  //             const reservation = await Reservation.findById(_id);
  //             return !reservation ? res.status(404).json({error: 'Reservation not found'}) : res.status(200).json(reservation);
  //         } catch (e) {
  //             return res.status(400).json({error: e.message});
  //         }
  //     },

  //     // Get reservation checkin by id
  //     getReservationCheckinById: async (req, res) => {
  //         const _id = req.params.id;
  //         try {
  //             const reservation = await Reservation.findById(_id);
  //             reservation.checkin = true;
  //             await reservation.save();
  //             return !reservation ? res.status(404).json({error: 'Reservation not found'}) : res.status(200).json(reservation);
  //         } catch (e) {
  //             return res.status(400).json({error: e.message});
  //         }
  //     },

  //   // Update reservation by id
  //     updateReservationById: async (req, res) => {
  //         const _id = req.params.id;
  //         const updates = Object.keys(req.body);
  //         const allowedUpdates = [
  //         'userId',
  //         'showtimeId',
  //         'originalPrice',
  //         'totalPrice'
  //         ];
  //         const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  //         if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

  //         try {
  //             const reservation = await Reservation.findById(_id);
  //             updates.forEach((update) => (reservation[update] = req.body[update]));
  //             await reservation.save();
  //             return !reservation ? res.status(404).json({error: 'Reservation not found'}) : res.status(200).json(reservation);
  //         } catch (e) {
  //             return res.status(400).json({error: e.message});
  //         }
  //     },

  //   // Delete reservation by id
  //     deleteReservationById: async (req, res) => {
  //         const _id = req.params.id;
  //         try {
  //             const reservation = await Reservation.findByIdAndDelete(_id);
  //         return !reservation ? res.status(404).json({error: 'Reservation not found'}) : res.status(200).json(reservation);
  //         } catch (e) {
  //             return res.status(400).json({error: e.message});
  //         }
  //     },

}

module.exports = reservationController;