'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* 🔹 App Logo */}
        <Link href="/" className="text-lg font-bold">
          Dummy Hotel
        </Link>

        {/* 🔹 Navigation Links */}
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/book">Book Table</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
      </div>
    </nav>
  );
}
