import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import axios from "axios";
import { marked } from "marked";

const App = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [jsonData, setJsonData] = useState("");
  const [output, setOutput] = useState("");
  const [format, setFormat] = useState("html");
  const [statusMessage, setStatusMessage] = useState("");

  const formats = [
    { label: "HTML", value: "html" },
    { label: "Markdown", value: "markdown" },
  ];

  const fetchJson = async () => {
    try {
      const response = await axios.get(apiUrl);
      setJsonData(JSON.stringify(response.data, null, 2));
      setStatusMessage("Success! JSON fetched.");
    } catch (error) {
      setStatusMessage("Error: Could not fetch data. Check the API endpoint.");
    }
  };

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const renderData = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      if (format === "html") {
        const html = generateHtmlFromJson(parsedData);
        setOutput(html);
      } else if (format === "markdown") {
        const markdown = generateMarkdownFromJson(parsedData);
        setOutput(marked(markdown));
      }
      setStatusMessage("Rendered successfully!");
    } catch (error) {
      setStatusMessage("Error: Invalid JSON format.");
    }
  };

  const generateHtmlFromJson = (data) => {
    let html = "<ul>";
    Object.keys(data).forEach((key) => {
      html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
    });
    html += "</ul>";
    return html;
  };

  const generateMarkdownFromJson = (data) => {
    let markdown = "";
    Object.keys(data).forEach((key) => {
      markdown += `**${key}:** ${data[key]}  \n`;
    });
    return markdown;
  };

  return (
    <div className="p-m-4">
      <Card title="API JSON Renderer" className="p-shadow-3">
        <div className="p-grid p-fluid">
          {/* API URL Input */}
          <div className="p-col-12 p-md-9">
            <InputText
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="Enter API Endpoint URL"
              className="p-inputtext-lg"
            />
          </div>
          <div className="p-col-12 p-md-3">
            <Button
              label="GET"
              icon="pi pi-cloud-download"
              onClick={fetchJson}
              className="p-button-primary p-button-lg"
            />
          </div>
        </div>

        {/* JSON Editor & Render Output */}
        <div className="p-grid p-pt-4">
          {/* JSON Editor */}
          <div className="p-col-12 p-md-6">
            <textarea
              value={jsonData}
              onChange={handleJsonChange}
              placeholder="Edit JSON here"
              rows="15"
              className="p-inputtext p-inputtextarea p-inputtext-lg p-shadow-2"
              style={{
                width: "100%",
                padding: "10px",
                fontFamily: "monospace",
              }}
            ></textarea>
          </div>

          {/* Output Section */}
          <div className="p-col-12 p-md-6">
            <Card title="Rendered Output">
              <div
                style={{ padding: "10px", minHeight: "250px" }}
                className="p-shadow-2"
                dangerouslySetInnerHTML={{ __html: output }}
              ></div>
            </Card>
          </div>
        </div>

        {/* Render Format & Status Messages */}
        <div className="p-grid p-pt-4 p-ai-center">
          <div className="p-col-6">
            <Dropdown
              value={format}
              options={formats}
              onChange={(e) => setFormat(e.value)}
              placeholder="Select Format"
              className="p-dropdown-lg"
            />
          </div>
          <div className="p-col-6">
            <Button
              label="Render Data"
              icon="pi pi-cog"
              onClick={renderData}
              className="p-button-success p-button-lg"
            />
          </div>
        </div>

        {/* Status Message */}
        <div
          className="p-pt-2"
          style={{ color: statusMessage.includes("Error") ? "red" : "green" }}
        >
          {statusMessage}
        </div>
      </Card>
    </div>
  );
};

export default App;
