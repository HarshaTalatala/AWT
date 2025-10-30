const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
 res.render("Form", { weather: null, error: null });
});

app.post("/", async (req, res) => {
 const city = req.body.city;
 const apiKey = "18656385803980ca07b53f81f587df49";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 try {
   const response = await axios.get(url);
   console.log(response);
   const data = response.data;
   const weather = {
     city: data.name,
     temp: data.main.temp,
     description: data.weather[0].description,
     icon: data.weather[0].icon,
   };
   res.render("Form", { weather, error: null });
 } catch (error) {
   res.render("Form", { weather: null, error: "City not found or invalid input" });
 }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));