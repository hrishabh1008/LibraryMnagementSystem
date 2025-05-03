import React from 'react';

const About = () => {
    return (
      <div className="bg-[#e3d4b9] min-h-screen flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to our Online Library Management System! Our mission is to
            provide a seamless and efficient platform for managing library
            resources, enabling users to explore, borrow, and manage books with
            ease. Whether you're a student, teacher, or book enthusiast, our
            system is designed to cater to your needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our platform offers a wide range of features, including book search,
            borrowing history, and personalized recommendations. We are
            committed to fostering a love for reading and learning by making
            library resources accessible to everyone.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thank you for choosing our Online Library Management System.
            Together, let's embark on a journey of knowledge and discovery!
          </p>
        </div>
      </div>
    );
};

export default About;