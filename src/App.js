import React, { useState, useRef } from "react";
import ItineraryForm from "./components/ItineraryForm";
import PdfPreview from "./components/PdfPreview";
import exportToPdf from "./components/PdfExporter";

function App() {
  const [itinerary, setItinerary] = useState({
    name: "",
    destination: "",
    duration: "",
    travelers: "",
    totalAmount: 0,
    days: [
      {
        id: 1,
        title: "",
        date: "",
        city: "",
        morning: "",
        afternoon: "",
        evening: "",
        image: "/placeholder.jpg",
        hotel: {
          name: "",
          checkIn: "",
          checkOut: "",
          nights: ""
        },
      },
    ],
    flights: [
      {
        date: "",
        airline: "",
        flightNo: "",
        from: "",
        to: "",
      },
    ],
    hotels: [
      {
        city: "",
        checkIn: "",
        checkOut: "",
        nights: "",
        name: "",
      },
    ],
    importantNotes: [
      {
        point: "Airlines Standard Policy",
        details: "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost",
      },
    ],
    paymentPlan: [
      {
        amount: "",
        dueDate: "",
      },
    ],
  });

  const previewRef = useRef();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4">
      <div className="md:w-1/2 bg-white p-4 shadow-lg rounded-lg">
        <ItineraryForm itinerary={itinerary} setItinerary={setItinerary} />
        <button
          onClick={() => exportToPdf(previewRef)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Itinerary (PDF)
        </button>
      </div>

      <div className="md:w-1/2 p-4">
        <PdfPreview itinerary={itinerary} ref={previewRef} />
      </div>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

