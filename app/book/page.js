'use client';

import React from 'react';

export default function BookTable() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Table reserved successfully!');
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fefcf3] px-4 py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book a Table</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>


          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-1">
              Select Hotel
            </label>
            <select
              id="hotel"
              name="hotel"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Choose a Hotel --</option>
              <option value="Taj Hotels">Taj Hotels</option>
              <option value="The Oberoi Group">The Oberoi Group</option>
              <option value="ITC Hotels">ITC Hotels</option>
              <option value="Radisson Blu">Radisson Blu</option>
              <option value="Lemon Tree">Lemon Tree</option>
              <option value="JW Marriott">JW Marriott</option>
              <option value="The Leela">The Leela</option>
              <option value="Trident Hotels">Trident Hotels</option>
            </select>
          </div>


          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>


          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
}
