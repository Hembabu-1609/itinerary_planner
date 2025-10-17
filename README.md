# Tour Planner & PDF Generator

A React application for creating detailed travel itineraries with PDF export functionality. Built with React, Tailwind CSS, and modern JavaScript.

## Features

### 1. Trip Overview
- Customer name and destination input
- Duration and number of travelers
- Total trip cost calculation

### 2. Day-by-Day Itinerary
- Add multiple days to the itinerary
- For each day:
  - Day title and date
  - City/location
  - Morning activities
  - Afternoon activities
  - Evening activities
  - Optional image upload

### 3. Hotel Bookings
- Centralized hotel management
- For each hotel:
  - Hotel name
  - City
  - Check-in and check-out dates
  - Number of nights
- All hotel bookings displayed in a table format

### 4. Flight Details
- Multiple flight entries
- For each flight:
  - Date
  - Airline and flight number
  - Origin and destination
  - Displayed in an easy-to-read format

### 5. Payment Plan
- Total amount display
- Multiple installment support
- For each installment:
  - Amount
  - Due date
  - Payment status

### 6. Additional Features
- Important notes section
- Company details in footer
- Professional PDF export with proper formatting

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

## Project Structure

```
tour_planner/
├── src/
│   ├── components/
│   │   ├── DayForm.js         # Day details input form
│   │   ├── ItineraryForm.js   # Main form component
│   │   ├── PdfExporter.js     # PDF generation logic
│   │   └── PdfPreview.js      # PDF preview component
│   ├── App.js                 # Main application component
│   └── index.js              # Application entry point
├── public/                   # Static assets
└── package.json             # Project dependencies
```

## Technical Details

### Components

#### 1. DayForm.js
- Handles individual day entries
- Morning, afternoon, and evening activities
- Date and city inputs

#### 2. ItineraryForm.js
- Main form component
- Manages all form sections:
  - Trip overview
  - Hotel bookings
  - Flight details
  - Payment plan
  - Important notes

#### 3. PdfExporter.js
- PDF generation logic using html2canvas and jsPDF
- Proper scaling and formatting
- High-quality output

#### 4. PdfPreview.js
- Live preview of the PDF
- Matches exact PDF output
- Professional layout with branding

### Styling
- Tailwind CSS for responsive design
- Purple-based color scheme
- Professional typography
- Modern UI components

### Form Management
- Centralized state in App.js
- Proper validation
- Efficient updates

### PDF Generation Features
- Company branding
- Structured layout
- Tables for flights and hotels
- Payment details
- Company footer

## Development Notes

### Recent Changes
- Moved hotel details from day cards to centralized hotel bookings
- Added proper date input labels
- Improved PDF preview styling
- Enhanced form validation
- Added flight details section
- Implemented payment plan feature

### Known Issues
- Image upload feature is currently commented out
- Some TypeScript warnings from dependencies (can be ignored)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
