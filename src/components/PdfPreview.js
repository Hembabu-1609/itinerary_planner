import React, { forwardRef } from "react";

const PdfPreview = forwardRef(({ itinerary }, ref) => (
  <div ref={ref} className="bg-white shadow-lg rounded-2xl p-8 w-[800px]">
    <div className="flex justify-between items-center mb-6">
      <img src="./tour_planner/public/logo.jpg" alt="Vigovia" className="h-8" />
    </div>
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl py-8 px-6 mb-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Hi, {itinerary.name}!</h1>
      <h2 className="text-2xl font-semibold mb-4">{itinerary.destination} Itinerary</h2>
      <p className="text-xl">{itinerary.duration}</p>
      <div className="flex gap-4 mt-4 align-center justify-center">
        <span>✈️</span>
        <span>🏨</span>
        <span>🎫</span>
        <span>🚗</span>
        <span>🍽️</span>
      </div>
    </div>
    {itinerary.days.map((day, index) => (
      <div key={index} className="flex gap-6 mb-8">
        {/* Day Number */}
        <div className="w-24">
          <div className="bg-purple-900 text-white p-4 rounded-lg text-center h-full flex flex-col justify-center">
            <span className="text-sm">Day</span>
            <span className="text-2xl font-bold">{index + 1}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* <img src={day.image} alt={day.title} className="w-24 h-24 rounded-full object-cover" /> */}
              <div>
                <h3 className="text-xl font-bold mb-1">{day.title}</h3>
                <p className="text-gray-600">{day.date}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="mt-1">🌅</span>
                <div>
                  <p className="font-semibold">Morning</p>
                  <p className="text-gray-600">{day.morning}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-1">☀️</span>
                <div>
                  <p className="font-semibold">Afternoon</p>
                  <p className="text-gray-600">{day.afternoon}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-1">🌙</span>
                <div>
                  <p className="font-semibold">Evening</p>
                  <p className="text-gray-600">{day.evening}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    {/* <div className="mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Flight Summary</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        {itinerary.flights.map((flight, index) => (
          <div key={index} className="flex items-center gap-4 border-b border-gray-200 py-2 last:border-0">
            <div className="w-32">{flight.date}</div>
            <div className="flex-1">Airlines: {flight.airline} {flight.flightNo}</div>
            <div className="text-gray-600">From {flight.from} To {flight.to}</div>
          </div>
        ))}
      </div>
    </div> */}

    <div className="mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Flights Summary</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <table className="w-full">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Airlines Name</th>
              <th className="py-2 px-4 text-left">From & To</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.flights.map((flight, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-0">
                <td className="py-2 px-4">{flight.date}</td>
                <td className="py-2 px-4">{flight.airline} ({flight.flightNo})</td>
                <td className="py-2 px-4">{flight.from} to {flight.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Hotel Bookings</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <table className="w-full">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="py-2 px-4 text-left">City</th>
              <th className="py-2 px-4 text-center">Check In</th>
              <th className="py-2 px-4 text-center">Check Out</th>
              <th className="py-2 px-4 text-left">Nights</th>
              <th className="py-2 px-4 text-left">Hotel Name</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.hotels.map((hotel, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-0">
                <td className="py-2 px-4">{hotel.city}</td>
                <td className="py-2 px-4">{hotel.checkIn}</td>
                <td className="py-2 px-4">{hotel.checkOut}</td>
                <td className="py-2 px-4">{hotel.nights}</td>
                <td className="py-2 px-4">{hotel.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Important Notes</h3>
      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
        {itinerary.importantNotes.map((note, index) => (
          <div key={index} className="flex items-start gap-4 border-b border-gray-200 last:border-0 py-2">
            <div className="font-semibold w-48">{note.point}</div>
            <div className="flex-1 text-gray-600">{note.details}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Payment Plan</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">Total Amount</div>
          <div>₹{itinerary.totalAmount} For {itinerary.travelers} Pax (Inclusive of GST)</div>
        </div>
        <table className="w-full">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Installment</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.paymentPlan.map((payment, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-0">
                <td className="py-2 px-4">Installment {index + 1}</td>
                <td className="py-2 px-4">₹{payment.amount}</td>
                <td className="py-2 px-4">{payment.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
      <div>
        <p className="font-semibold">Vigovia Tech Pvt. Ltd</p>
        <p className="text-sm text-gray-600">Registered Office: H4-109 Cinnabar Hills,</p>
        <p className="text-sm text-gray-600">Links Business Park, Karnataka, India.</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Phone: +91-9504061112</p>
        <p className="text-sm text-gray-600">Email ID: Utkarsh@Vigovia.Com</p>
        <p className="text-sm text-gray-600">CIN: U79110KA2024PTC191890</p>
      </div>
    </div>
  </div>
));

export default PdfPreview;
