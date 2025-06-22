
# 🩺  Scheduled Doctor Appointment – SaaS Landing Page

A fully functional, modern, and responsive SaaS landing page for a Scheduled Doctor Appointment  web application. This project allows patients to sign up, book appointments,
and rate doctors, while doctors can manage schedules and view insights.

## 📌 Features

- 🔐 Secure user registration with email verification
- 📧 Email confirmation using Nodemailer
- 👩‍⚕️ Role-based access for patients and doctors
- 📊 Doctor-patient feedback charts using Chart.js
- 🧾 Booking, viewing, and managing appointments
- 🖥️ Clean and responsive Tailwind CSS UI
- ⚙️ Backend REST APIs with Express and MongoDB


## 🛠️ Tech Stack

**Frontend:**
- HTML5
- Tailwind CSS
- JavaScript
- Chart.js

**Backend:**
- Node.js
- Express.js
- MongoDB
- Nodemailer


## 📁 Folder Structure

```

doctor-scheduler/
├── public/
│   ├── index.html           # Landing Page
│   ├── login.html           # Login Page
│   └── signup.html          # Signup Page          
│   └── Thankyou.html        # ThankyouPage
├── Server/
   ├── models/
   │   └── User.js
   ├── routes/
   │   └── auth.js              # Auth API routes
   ├── utils/
   │   └── sendEmail.js         # Email verification logic
   ├── .env                     # Environment variables
   ├── server.js                # Entry point of the backend
├── package.json


## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/doctor-scheduler.git
cd doctor-scheduler


### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root with the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

> ⚠️ Use an app password if using Gmail. Enable “less secure apps” or generate an app password via Google account settings.

### 4. Run the Server
node server.js
### 5. Open in Browser
Navigate to:
http://localhost:3000/public/index.html
## 📷 Screenshots

## 📚 Project Objectives

* Build a real-world SaaS UI with real backend integration
* Implement secure email-based signup and login
* Allow appointment management and analytics display
* Practice full-stack development skills with MongoDB and Node.js

## ✅ Future Enhancements

* Appointment calendar with time slots
* Admin dashboard for hospital overview
* Email reminders for appointments
* Mobile app integration

## 🙋‍♀️ Acknowledgments

* [Tailwind CSS](https://tailwindcss.com/)
* [Chart.js](https://www.chartjs.org/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Node.js](https://nodejs.org/)


