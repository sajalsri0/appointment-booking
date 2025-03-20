import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await axios.get('http://localhost:5000/api/appointments');
    setAppointments(res.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const bookAppointment = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', { name, date });
    alert('Appointment booked!');
    fetchAppointments();
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={bookAppointment}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Book Now</button>
      </form>

      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((apt) => (
          <li key={apt._id}>{apt.name} - {new Date(apt.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
