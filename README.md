# ???? Appointment Booking System

It is a **MERN Stack (MongoDB, Express.js, Node.js, and EJS)** powered **Appointment Booking System** that enables users to register, log in, and manage their appointments hassle-free. Admins can easily manage users, appointments, and available time slots.

---

## ???? Features

### ✅ **User Features**
- ???? **User Authentication** – Register, Login, and Logout using JWT
- ???? **Book Appointments** – Choose date and time slots for appointments
- ???? **View Appointments** – View upcoming and previous appointments
- ✏️ **Modify Appointments** – Change or cancel appointments
- ⚙️ **Profile Management** – Manage profile and password securely
- ???? **Email Confirmation** – Receive email alerts for bookings

### ✅ **Admin Features**
- ???? **Admin Dashboard** – Users and appointments overview
- ???? **Manage Appointments** – View, update, and cancel appointments
- ✨ **Add/Edit Available Time Slots** – Set available slots for services
- ???? **User Management** – Display and manage registered users

### ✅ **Additional Features**
- ???? Secure API Endpoints with **JWT Authentication**
- ???? Error Handling and Request Validation Middleware
- ????️ MongoDB Integration with **Mongoose Models**
- ⚡ Real-time changes with **Nodemon** for development
- ???? Email Notifications using **Nodemailer**

---

## ???? Project Structure

appointment-booking/ ├── backend/ │ ├── config/ │ │ └── db.js # MongoDB Connection │ ├── controllers/ │ │ ├── authController.js │ │ └── appointmentController.js │ ├── models/ │ │ ├── User.js │ │ └── Appointment.js │ ├── routes/ │ │ ├── auth.js │ │ └── appointment.js │ ├── views/ │ │ ├── login.ejs │ │ ├── register.ejs │ │ ├── dashboard.ejs │ │ └── appointment.ejs │ ├── server.js │ └──.env └── frontend/ ├── css/ │ └── styles.css └── js/ └── main.js
