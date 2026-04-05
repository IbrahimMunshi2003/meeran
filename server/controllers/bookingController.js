const Booking = require('../models/Booking');

exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) { next(error); }
};

exports.getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) { res.status(404); throw new Error('Booking not found'); }
    res.json(booking);
  } catch (error) { next(error); }
};

exports.createBooking = async (req, res, next) => {
  try {
    console.log('Incoming Booking Data ->', req.body);
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) { next(error); }
};

exports.updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) { res.status(404); throw new Error('Booking not found'); }
    res.json(booking);
  } catch (error) { next(error); }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) { res.status(404); throw new Error('Booking not found'); }
    res.json({ message: 'Booking removed' });
  } catch (error) { next(error); }
};