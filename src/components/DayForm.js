import React from "react";

function DayForm({ day, itinerary, setItinerary }) {
  const handleDayChange = (e) => {
    const updatedDays = itinerary.days.map((d) =>
      d.id === day.id ? { ...d, [e.target.name]: e.target.value } : d
    );
    setItinerary({ ...itinerary, days: updatedDays });
  };

  return (
    <div className="border p-3 mb-3 rounded">
      <h4 className="font-semibold mb-2">Day {day.id}</h4>
      <div className="flex gap-2 mb-2">
        <input
          name="title"
          placeholder="Day Title"
          className="border p-2 flex-1"
          value={day.title}
          onChange={handleDayChange}
        />
        <label className="block text-gray-700 text-sm mb-1">Date</label>
        <input
          name="date"
          type="date"
          placeholder="Date"
          className="border p-2 flex-1"
          value={day.date}
          onChange={handleDayChange}
        />
      </div>
      <input
        name="city"
        placeholder="City"
        className="border p-2 w-full mb-2"
        value={day.city}
        onChange={handleDayChange}
      />
      {/* <input
        name="image"
        placeholder="Image URL"
        className="border p-2 w-full mb-2"
        value={day.image}
        onChange={handleDayChange}
      /> */}
      <textarea
        name="morning"
        placeholder="Morning Activity"
        className="border p-2 w-full mb-2"
        value={day.morning}
        onChange={handleDayChange}
      ></textarea>
      <textarea
        name="afternoon"
        placeholder="Afternoon Activity"
        className="border p-2 w-full mb-2"
        value={day.afternoon}
        onChange={handleDayChange}
      ></textarea>
      <textarea
        name="evening"
        placeholder="Evening Activity"
        className="border p-2 w-full mb-2"
        value={day.evening}
        onChange={handleDayChange}
      ></textarea>


      {/* <input
        name="transport"
        placeholder="Transport"
        className="border p-2 w-full mb-2"
        value={day.transport}
        onChange={handleDayChange}
      />
      <input
        name="meals"
        placeholder="Meals"
        className="border p-2 w-full mb-2"
        value={day.meals}
        onChange={handleDayChange}
      />
      <input
        name="activities"
        placeholder="Other Activities"
        className="border p-2 w-full mb-2"
        value={day.activities}
        onChange={handleDayChange}
      /> */}
    </div>
  );
}

export default DayForm;
