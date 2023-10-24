import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-cover min-h-screen">
      <div className="container mx-auto py-16 text-center text-white">
        <h1 className="text-4xl font-bold">WELCOME TO DEANANDRO'S WEBSITE</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          eos ullam est dolor architecto blanditiis.
        </p>
        <button className="btn btn-primary mt-4">Get Started</button>
      </div>
    </div>
  );
};

export default Welcome;
