"use client";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const ProfileCards = () => {
  return (
    <div className="h-[50vh] flex flex-col sm:flex-row bg-[#F5F1E9]">
      <div className="w-full sm:w-[40%] flex justify-center items-center p-4">
        <div className="bg-[#FFEADA] w-32 h-32 sm:w-48 sm:h-48 aspect-square rounded-full overflow-hidden">
          <img
            src="profile-picture.jpg"
            alt="Faculty"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full sm:w-[60%] h-full bg-[#D4A017] p-4 flex flex-col justify-between">
        <div className="info-list text-white">
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            Prof. Rajiv Bansal
          </h2>
          <p className="text-sm sm:text-base">
            <strong>Designation:</strong> Senior Science Instructor
          </p>
          <p className="text-sm sm:text-base">
            <strong>Experience:</strong> 23 years
          </p>
          <p className="text-sm sm:text-base">
            <strong>Qualifications:</strong> M.Sc. in Botany, B.Ed.
          </p>
          <p className="text-sm sm:text-base">
            <strong>Specialization:</strong> Science Education
          </p>
        </div>
        <div className="social-icons flex gap-4">
          <a href="#" className="text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-white">
            <img src="custom-icon.png" alt="Custom" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
