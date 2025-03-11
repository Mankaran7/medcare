import React from "react";
import "./DoctorsList.css";

const doctors = [
    {
      id: 1,
      name: "Dr. Jane Doe",
      degree: "MBBS",
      specialty: "Dentist",
      experience: "9 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Dr. Sam Wilson",
      degree: "BDS",
      specialty: "Dentist",
      experience: "5 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Dr. Pepper Potts",
      degree: "BHMS",
      specialty: "Dentist",
      experience: "5 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Dr. Bruce Banner",
      degree: "MD",
      specialty: "Neurologist",
      experience: "15 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Dr. Tony Stark",
      degree: "MBBS",
      specialty: "Cardiologist",
      experience: "20 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Dr. Natasha Romanoff",
      degree: "MD",
      specialty: "Pediatrician",
      experience: "10 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Dr. Steve Rogers",
      degree: "MBBS",
      specialty: "Orthopedic Surgeon",
      experience: "12 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Dr. Wanda Maximoff",
      degree: "MD",
      specialty: "Psychiatrist",
      experience: "8 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Dr. Stephen Strange",
      degree: "MBBS",
      specialty: "Neurosurgeon",
      experience: "18 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Dr. Carol Danvers",
      degree: "BAMS",
      specialty: "General Physician",
      experience: "7 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Dr. Scott Lang",
      degree: "BHMS",
      specialty: "Dermatologist",
      experience: "6 Years",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Dr. Peter Parker",
      degree: "MBBS",
      specialty: "ENT Specialist",
      experience: "5 Years",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
  ];
  
const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const DoctorsList = () => {
  return (
    <div className="doctors-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3>{doctor.name}, <span className="degree">{doctor.degree}</span></h3>
          <p className="specialty">
            ⚕ {doctor.specialty} &nbsp; ⌛ {doctor.experience}
          </p>
          <p className="ratings">
            <strong>Ratings:</strong> <span className="stars">{renderStars(doctor.rating)}</span>
          </p>
          <button className="book-btn">Book Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
