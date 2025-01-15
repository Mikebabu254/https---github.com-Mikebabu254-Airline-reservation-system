# Jet Set Airline Reservation System

Jet-Set is a modern and efficient airline reservation system built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides seamless management of flight schedules, bookings, and user profiles with dedicated user and admin interfaces.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)

---

## Features

### User Features
- **Account Management**: Sign up, log in, and manage profiles.
- **Flight Search**: Search for available flights by origin, destination and date.
- **Booking System**: Book flights, view booking history, and cancel bookings.

### Admin Features
- **Flight Management**: Add, edit, or delete flights in the schedule.
- **User Management**: View and manage registered users.
- **Admin Panel**: A dashboard for administrators to oversee the system.

---

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Other Tools**: Axios, Mongoose, Bcrypt.js

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mikebabu254/Jet-set-airline-reservation-system.git
   cd jet-set-reservation-system
   ```

2. **Install dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure environment variables**: **(Not am must)**
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     PORT=3000
     ```

4. **Start the application**:
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```

5. **Access the application**:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

---

## Usage

1. **User Login**:
   - Navigate to the login page and enter your credentials.
   - Redirects based on role:
     - User: `/home`
     - Admin: `/admin`

2. **Flight Booking**:
   - Use the flight search feature to find flights.
   - Select a flight and book your tickets.

3. **Admin Panel**:
   - Log in with admin credentials.
   - Manage flights and users via the admin dashboard.

---

## Folder Structure

```
jet-set-reservation-system
├── backend
│   ├── controls
│   ├── models
│   ├── routers
│   └── index.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── admin
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   ├── app.css
│   │   ├── main.jsx
│   │   ├── UserBookings.css
│   │   └── App.jsx
|── LICENSE
└── README.md
```

---

## API Endpoints

### User Routes
- `POST /login`: Login user.
- `POST /register`: Register new user.
- `GET /profile`: Fetch logged-in user profile.

### Flight Routes
- `GET /api/flights`: Fetch all flights.
- `POST /api/flights`: Add a new flight (Admin only).
- `PUT /api/flights/:id`: Update flight details (Admin only).
- `DELETE /api/flights/:id`: Delete a flight (Admin only).

### Booking Routes
- `POST /api/bookings`: Create a new booking.
- `GET /api/bookings`: Fetch user bookings.
- `DELETE /api/bookings/:id`: Cancel a booking.

---

## Screenshots

Add screenshots here to showcase the user interface and functionality.

---

## Future Enhancements

- Add real-time notifications for booking confirmations.
- Integrate payment gateway for ticket bookings.
- Implement flight seat selection.
- Enhance admin analytics with detailed reports.

---

## Contributing

Contributions are welcome! Please create a pull request with detailed explanations of the changes made.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
Special thanks to me for commiting my time to this project.
Special thanks to the open-source community for the tools and libraries used in this project.

