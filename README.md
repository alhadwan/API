# vehicle-info-lookup

This project is a Node.js + Express web application that allows users to enter a car make (e.g. Lexus, Honda, Ford) and get a list of models using the NHTSA Vehicle API. It demonstrates how to integrate and display live data from a public API using Axios and EJS templating.

💡 Features

- User enters a car make (e.g. "lexus")
- App fetches all models for that make from the NHTSA API
- Models are displayed dynamically using EJS


🛠 Tech Stack

- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript templates)


🚀 How to Run This Project

- git clone https://github.com/yourusername/vehicle-info-lookup.git
- cd vehicle-info-lookup
- npm install
- nodemon index.js # or node index.js
- http://localhost:3000

🖼 Dem

- Enter a make like "toyota" → Get models like Corolla, Camry, Prius, etc.

📚 API Used

- NHTSA Vehicle API
- Endpoint: /vehicles/GetModelsForMake/{make}?format=json
