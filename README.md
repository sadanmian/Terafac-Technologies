# JSON API Fetcher

A simple React application that allows users to fetch, edit, and render JSON data from any API endpoint. Users can view the JSON response, modify it, and render it as HTML or Markdown.

## Features

- Input any API endpoint to retrieve JSON data
- Edit JSON data directly in the application
- Render JSON data as HTML or Markdown
- User-friendly interface with error handling

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

2. **Install dependencies:**

   ```bash
   npm install primereact primeicons marked
   ```

3. **Add PrimeReact CSS** to `src/App.js` or `src/index.js`:

   ```javascript
   import "primereact/resources/themes/saga-blue/theme.css"; // theme
   import "primereact/resources/primereact.min.css"; // core css
   import "primeicons/primeicons.css"; // icons
   ```

4. Replace the content of `src/App.js` with the provided code for the JSON API Fetcher

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Enter an API endpoint URL in the input field and click the "GET" button to fetch JSON data

3. View and edit the JSON response on the left side of the interface

4. Select the desired rendering format (HTML or Markdown) and click "Render" to view the output on the right side

## Error Handling

- Network errors and invalid JSON formats trigger user-friendly error messages
- Status messages are displayed using PrimeReact's Toast component

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open-source and available under the MIT License.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

---

Created with ❤️ by Sadan Mian
