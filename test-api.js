// Test script to check Gemini API
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmtCJ5lYP6wASklnZ3GAkJDvtFhbQXGfY";

const testData = {
  contents: [
    {
      role: "user",
      parts: [{ text: "Hello, can you respond?" }]
    }
  ]
};

fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(testData),
})
.then(response => {
  console.log("Response status:", response.status);
  return response.json();
})
.then(data => {
  console.log("API Response:", JSON.stringify(data, null, 2));
})
.catch(error => {
  console.error("API Error:", error);
});