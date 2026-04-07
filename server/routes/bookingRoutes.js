const express = require('express');
const router = express.Router();
const { getBookings, getBookingById, createBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

// Post is PUBLIC so guests can book. Admins have access to GET.
router.route('/')
  .get(protect, admin, getBookings)
  .post(createBooking);

router.route('/:id')
  .get(protect, admin, getBookingById)
  .put(protect, admin, updateBooking)
  .delete(protect, admin, deleteBooking);

module.exports = router;