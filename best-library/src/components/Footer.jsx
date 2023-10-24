import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3 px-4">
            <h5 className="text-white mb-4">Join Our Newsletter</h5>
            <input type="email" className="form-input rounded-md bg-gray-700 text-white w-full" placeholder="Enter your email" />
            <button className="btn btn-primary mt-4">Submit</button>
            <div className="mt-4 flex items-center">
              <a href="#" className="mx-4">
                <i className="bi bi-instagram text-white" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="#" className="mx-4">
                <i className="bi bi-linkedin text-white" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="#" className="mx-4">
                <i className="bi bi-facebook text-white" style={{ fontSize: '2rem' }}></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h5 className="text-white mb-4">Chicago Community Member</h5>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              in. Ad, qui modi eos praesentium minima maxime asperiores et
              ipsum!
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              consequuntur reprehenderit quibusdam. Qui voluptates voluptatum
              id, nulla iusto eligendi dolor. Ipsum voluptatibus debitis, harum
              fugit expedita non porro reprehenderit aliquam.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 text-white text-center">
            <h5 className="mb-4">Come Visit Us</h5>
            <p>Taman Siswa</p>
            <p>Gunungpati</p>
            <p className="font-bold">Semarang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
