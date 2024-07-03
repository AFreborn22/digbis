import React from 'react';

const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('../../public/foto.png')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Your Future</h1>
          <p className="text-xl mb-6">For your future to be a Better</p>
          <div>
            <button className="bg-red-500 text-white px-6 py-2 rounded mr-4">Let's Go</button>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;