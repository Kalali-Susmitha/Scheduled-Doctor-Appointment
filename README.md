
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
![Image](https://github.com/user-attachments/assets/13345724-cb99-40b8-9134-a0168f210816)
![Image](https://github.com/user-attachments/assets/837d1f1f-48c5-49f4-aa28-097bfafa48dd)

![Image](https://github.com/user-attachments/assets/d41ba627-5ac3-4d53-bdb6-de63cb3c57e3)

![Image](https://github.com/user-attachments/assets/257903ca-8ce4-40d1-b911-912cf2157658)
![Image](https://github.com/user-attachments/assets/59dbb400-003b-46cf-9a7c-e52badad10b4)

![Image](https://github.com/user-attachments/assets/d867c9d6-02cf-4396-972c-c6e83ab6294c)

![Image](https://github.com/user-attachments/assets/fe6af94f-f604-428b-86f2-b4a29ceb56da)

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


