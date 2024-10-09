# JSON API Fetcher

A simple React application that allows users to fetch, edit, and render JSON data from any API endpoint. Users can view the JSON response, modify it, and render it as HTML or Markdown.

## Features

- Input any API endpoint to retrieve JSON data.
- Edit JSON data directly in the application.
- Render JSON data as HTML or Markdown.
- User-friendly interface with error handling.

## Technologies Used

- React
- PrimeReact
- PrimeFlex
- Marked (for Markdown rendering)

## Installation

1. **Clone the repository** or create a new React app:
   ```bash
   npx create-react-app json-api-fetcher
   cd json-api-fetcher
   ```
2. Install the required dependencies:
   npm install primereact primeicons marked

3. Add PrimeReact CSS: Include the following lines in src/index.js or src/App.js:
   import 'primereact/resources/themes/saga-blue/theme.css'; // theme
   import 'primereact/resources/primereact.min.css'; // core css
   import 'primeicons/primeicons.css'; // icons

4. Replace the content of src/App.js with the provided code for the JSON API Fetcher

Usage
Start the application:

bash
Copy code
npm start
Enter an API endpoint URL in the input field and click the GET button to fetch JSON data.

The JSON response will be displayed on the left side. You can edit the JSON data directly.

Select the desired rendering format (HTML or Markdown) and click the Render button to view the output on the right side.

Error Handling
The application provides error messages for network errors and invalid JSON formats.
Status messages are displayed using PrimeReact's Toast component.
License
This project is open-source and available under the MIT License.

markdown
Copy code

### Instructions for Use

- Copy the entire text above and save it in a file named `README.md` in your project directory.
- Feel free to customize any sections as necessary to fit your project or preferences!
#   T e r a f a c - T e c h n o l o g i e s  
 