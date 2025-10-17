import React from "react";
import DayForm from "./DayForm";

function ItineraryForm({ itinerary, setItinerary }) {
  const handleChange = (e) => {
    setItinerary({ ...itinerary, [e.target.name]: e.target.value });
  };

  const addDay = () => {
    setItinerary({
      ...itinerary,
      days: [
        ...itinerary.days,
        {
          id: itinerary.days.length + 1,
          city: "",
          morning: "",
          afternoon: "",
          evening: "",
          hotel: { name: "", checkIn: "", checkOut: "", nights: "" },
          transport: "",
          meals: "",
          activities: "",
        },
      ],
    });
  };

  const removeDay = (id) => {
    setItinerary({
      ...itinerary,
      days: itinerary.days.filter((d) => d.id !== id),
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Create Your Itinerary</h1>
      <h2 className="text-xl font-semibold mb-2">Trip Overview</h2>
      <input
        name="name"
        placeholder="Customer Name"
        className="border p-2 w-full mb-2"
        value={itinerary.name}
        onChange={handleChange}
      />
      <input
        name="destination"
        placeholder="Destination"
        className="border p-2 w-full mb-2"
        value={itinerary.destination}
        onChange={handleChange}
      />
      <input
        name="duration"
        placeholder="Duration (e.g., 4 Days 3 Nights)"
        className="border p-2 w-full mb-2"
        value={itinerary.duration}
        onChange={handleChange}
      />
      <input
        name="travelers"
        placeholder="Number of Travelers"
        className="border p-2 w-full mb-2"
        value={itinerary.travelers}
        onChange={handleChange}
      />
      <input
        name="totalAmount"
        placeholder="Total Amount"
        className="border p-2 w-full mb-4"
        value={itinerary.totalAmount}
        onChange={handleChange}
        type="number"
      />

      <h3 className="text-lg font-medium mb-2">Days</h3>
      {itinerary.days.map((day) => (
        <DayForm
          key={day.id}
          day={day}
          itinerary={itinerary}
          setItinerary={setItinerary}
        />
      ))}

      <button
        onClick={addDay}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add Day
      </button>
      <button
        onClick={() => removeDay(itinerary.days.length)}
        className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove Day
      </button>


      <h3 className="text-lg font-medium mt-4">Hotel Bookings</h3>
      {itinerary.hotels.map((hotel, index) => (
        <div key={index} className="border p-4 mb-2 rounded">
          <input
            className="border p-2 w-full mb-2"
            placeholder="City"
            value={hotel.city}
            onChange={e => {
              const newHotels = [...itinerary.hotels];
              newHotels[index] = { ...hotel, city: e.target.value };
              setItinerary({ ...itinerary, hotels: newHotels });
            }}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Hotel Name"
            value={hotel.name}
            onChange={e => {
              const newHotels = [...itinerary.hotels];
              newHotels[index] = { ...hotel, name: e.target.value };
              setItinerary({ ...itinerary, hotels: newHotels });
            }}
          />
          <label className="block text-gray-700 text-sm mb-1">Check-In Date</label>
          <input
            type="date"
            className="border p-2 w-full mb-2"
            value={hotel.checkIn}
            onChange={e => {
              const newHotels = [...itinerary.hotels];
              newHotels[index] = { ...hotel, checkIn: e.target.value };
              setItinerary({ ...itinerary, hotels: newHotels });
            }}
          />
          <label className="block text-gray-700 text-sm mb-1">Check-Out Date</label>
          <input
            type="date"
            className="border p-2 w-full mb-2"
            value={hotel.checkOut}
            onChange={e => {
              const newHotels = [...itinerary.hotels];
              newHotels[index] = { ...hotel, checkOut: e.target.value };
              setItinerary({ ...itinerary, hotels: newHotels });
            }}
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Number of Nights"
            value={hotel.nights}
            onChange={e => {
              const newHotels = [...itinerary.hotels];
              newHotels[index] = { ...hotel, nights: e.target.value };
              setItinerary({ ...itinerary, hotels: newHotels });
            }}
          />
        </div>
      ))}
      <button
        onClick={() => setItinerary({
          ...itinerary,
          hotels: [...itinerary.hotels, { city: "", name: "", checkIn: "", checkOut: "", nights: "" }]
        })}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Add Hotel
      </button>

      <h3 className="text-lg font-medium mt-4">Inclusions</h3>
      <textarea
        name="inclusions"
        className="border w-full p-2 mb-2"
        rows="3"
        value={itinerary.inclusions}
        onChange={handleChange}
      ></textarea>

      <h3 className="text-lg font-medium">Exclusions</h3>
      <textarea
        name="exclusions"
        className="border w-full p-2 mb-2"
        rows="3"
        value={itinerary.exclusions}
        onChange={handleChange}
      ></textarea>

      <h3 className="text-lg font-medium mt-4">Flight Details</h3>
      {itinerary.flights.map((flight, index) => (
        <div key={index} className="border p-4 mb-2 rounded">
          <label className="block text-gray-700 text-sm mb-1">Flight Date</label>
          <input
            type="date"
            className="border p-2 w-full mb-2"
            placeholder="Date"
            value={flight.date}
            onChange={(e) => {
              const newFlights = [...itinerary.flights];
              newFlights[index] = { ...flight, date: e.target.value };
              setItinerary({ ...itinerary, flights: newFlights });
            }}
          />
          <div className="flex gap-2 mb-2">
            <input
              className="border p-2 flex-1"
              placeholder="Airline"
              value={flight.airline}
              onChange={(e) => {
                const newFlights = [...itinerary.flights];
                newFlights[index] = { ...flight, airline: e.target.value };
                setItinerary({ ...itinerary, flights: newFlights });
              }}
            />
            <input
              className="border p-2 flex-1"
              placeholder="Flight No"
              value={flight.flightNo}
              onChange={(e) => {
                const newFlights = [...itinerary.flights];
                newFlights[index] = { ...flight, flightNo: e.target.value };
                setItinerary({ ...itinerary, flights: newFlights });
              }}
            />
          </div>
          <div className="flex gap-2">
            <input
              className="border p-2 flex-1"
              placeholder="From"
              value={flight.from}
              onChange={(e) => {
                const newFlights = [...itinerary.flights];
                newFlights[index] = { ...flight, from: e.target.value };
                setItinerary({ ...itinerary, flights: newFlights });
              }}
            />
            <input
              className="border p-2 flex-1"
              placeholder="To"
              value={flight.to}
              onChange={(e) => {
                const newFlights = [...itinerary.flights];
                newFlights[index] = { ...flight, to: e.target.value };
                setItinerary({ ...itinerary, flights: newFlights });
              }}
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => setItinerary({
          ...itinerary,
          flights: [...itinerary.flights, { date: "", airline: "", flightNo: "", from: "", to: "" }]
        })}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Add Flight
      </button>

      <h3 className="text-lg font-medium mt-4">Payment Plan</h3>
      {itinerary.paymentPlan.map((payment, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            className="border p-2 flex-1"
            placeholder="Amount"
            type="number"
            value={payment.amount}
            onChange={(e) => {
              const newPlan = [...itinerary.paymentPlan];
              newPlan[index] = { ...payment, amount: e.target.value };
              setItinerary({ ...itinerary, paymentPlan: newPlan });
            }}
          />
          <label className="block text-gray-700 text-sm mb-1">Due Date</label>
          <input
            type="date"
            className="border p-2 flex-1"
            placeholder="Due Date"
            value={payment.dueDate}
            onChange={(e) => {
              const newPlan = [...itinerary.paymentPlan];
              newPlan[index] = { ...payment, dueDate: e.target.value };
              setItinerary({ ...itinerary, paymentPlan: newPlan });
            }}
          />
        </div>
      ))}
      <button
        onClick={() => setItinerary({
          ...itinerary,
          paymentPlan: [...itinerary.paymentPlan, { amount: "", dueDate: "" }]
        })}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Add Payment Installment
      </button>

      <h3 className="text-lg font-medium mt-4">Important Notes</h3>
      {itinerary.importantNotes.map((note, index) => (
        <div key={index} className="mb-2">
          <input
            className="border p-2 w-full mb-1"
            placeholder="Point"
            value={note.point}
            onChange={(e) => {
              const newNotes = [...itinerary.importantNotes];
              newNotes[index] = { ...note, point: e.target.value };
              setItinerary({ ...itinerary, importantNotes: newNotes });
            }}
          />
          <textarea
            className="border p-2 w-full"
            placeholder="Details"
            rows="2"
            value={note.details}
            onChange={(e) => {
              const newNotes = [...itinerary.importantNotes];
              newNotes[index] = { ...note, details: e.target.value };
              setItinerary({ ...itinerary, importantNotes: newNotes });
            }}
          ></textarea>
        </div>
      ))}
      <button
        onClick={() => setItinerary({
          ...itinerary,
          importantNotes: [...itinerary.importantNotes, { point: "", details: "" }]
        })}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Add Important Note
      </button>
    </div>
  );
}

export default ItineraryForm;
