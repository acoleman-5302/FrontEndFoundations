import React from "react";
import ReactDOM from "react-dom";

// Styles


const weatherBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  minWidth: "300px",
  maxWidth: "600px",
  width: "100%",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
};

const textStyle = {
    fontSize: "18px",
    textAlign: "center",
    margin: "10px",
  };
  
  // API endpoint URL
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=28.04&longitude=-81.95&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&precipitation_unit=inch&forecast_days=1&timezone=America%2FNew_York";
  
  // Define a React component named 'App'
  class App extends React.Component {
    // Constructor that initializes the component's state
    constructor(props) {
      super(props);
      this.state = {
        time: "", // Empty string for the date and time string
        temperature: "", // Empty string for the current temperature
        temperature_2m_max: "", // Empty string for the high temperature
        temperature_2m_min: "", // Empty string for the low temperature
        precipitation_probability: "", // Empty string for the chance of rain
        background : "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
  
      };
    }
  
    // Lifecycle method called after the component has been mounted to the DOM
    componentDidMount() {
      fetch(url)
        .then((response) => response.json()) // Convert response to JSON
        .then((json) => this.prepareData(json)) // Call prepareData() method with the JSON data
        .catch((error) => console.log(error)); // Log any errors to the console
    }
  
    // Method to prepare the weather data for display
    prepareData(data) {

      // Check if there is a chance of rain
      let willRain = data.hourly.precipitation_probability.some((hr) => hr > 0);
      

      // Format the date and time string
      const dateObj = new Date(data.current_weather.time);
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
  
      // Set the state of the component with the processed data
      this.setState({
        time: dateObj.toLocaleDateString("en-US", options),
        temperature: data.current_weather.temperature,
        temperature_2m_max: data.daily.temperature_2m_max,
        temperature_2m_min: data.daily.temperature_2m_min,
        precipitation_probability: willRain,
      });
  
      return true; // Return true to indicate that the data is ready for display
    }
  
    render() {
      const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: this.state.background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
      // Check if the weather data is ready to be displayed
      let ready = false;
      if (this.state.time) {
        ready = true;
      }
      
   // Return the UI elements to display the weather data
   return (
    <div style={containerStyle}>
      <div style={weatherBoxStyle}>
        {!ready && <h2>Loading...</h2>}
        {ready && (
          <div>
            <h2 style={headingStyle}>Lakeland, Florida</h2>
            <h2 style={headingStyle}>{this.state.time}</h2>
            <div style={textStyle}>
              Temperature: {this.state.temperature}°F
            </div>
            <div style={textStyle}>
              High: {this.state.temperature_2m_max}°F Low:{" "}
              {this.state.temperature_2m_min}°F
            </div>
            <p style={textStyle}>
              {this.state.precipitation_probability
                ? "Rain possible within the next 24 hours"
                : "No rain forecasted within the next 24 hours"}
            </p>
            <button onClick={()=>{this.setState({background: "url(https://w0.peakpx.com/wallpaper/143/437/HD-wallpaper-foggy-forest-path-autumn-gloomy-weather-nature.jpg)"})}}>Change Background</button>
            
          </div>
        )}
      </div>
    </div>
  );
}
}

// Render the App component into the HTML element with ID 'root'
ReactDOM.render(<App />, document.getElementById("root"));