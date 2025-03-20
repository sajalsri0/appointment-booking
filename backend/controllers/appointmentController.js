const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  const { name, date } = req.body;
  try {
    const appointment = new Appointment({ name, date });
    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
