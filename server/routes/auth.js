// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

router.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).send('All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('User already exists');
    }

    const user = new User({ name, email });
    await user.save();

    // Send verification email (dummy for now)
    await sendEmail(email, 'Verify your email', 'Thanks for consulting Appointment Scheduler!');

    res.redirect('/thankyou.html');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
