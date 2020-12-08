import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
function hide(elements) {
  elements.style.visibility = 'hidden';
}
function show(elements) {
  elements.style.visibility = 'visible';     // Show
}
const Wheather = () => {
  useEffect(() => {
    document.getElementById('hide').style.visibility = 'hidden';
  }
  );

  let imageURL = "https://source.unsplash.com/user/erondu/daily";
  const [city, setCity] = useState("");
  function inputEvent(event) {
    setCity(event.target.value);
    // console.log(event.target.value)
    // hide(document.getElementById('hide'))
  }
  async function onSubmit(event) {
    event.preventDefault();
    show(document.getElementById('hide'))

    //   console.log("Hello")

    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eabe9c3f8fabd153358aca1144eb517c`;

    const photoAPI = `https://api.unsplash.com/search/photos?query=${city}&client_id=9j5RfKYGnAmb5W2bEYLBJbxlP7It91thQOewz51JLUw&content_filter=high`;

    const weatherResponse = await fetch(weatherAPI);
    const weatherData = await weatherResponse.json();

    if(weatherData.cod !== "404") {
      const photoResponse = await fetch(photoAPI);
      const photo = await photoResponse.json();
      if(photo?.results?.length) {
        imageURL = photo.results[0].urls.small;
        document.getElementById("image").src = imageURL;
        console.log(imageURL);
      }
      const kelvin = weatherData.main.temp;
      const celcius = kelvin - 273.15;
      console.log(Math.round(celcius));
      // console.log(data.sys.country)
      console.log(weatherData.name)
      console.log(weatherData)
      // console.log(data.weather[0].main)
      document.getElementById("city").innerHTML = "   Location: " + weatherData.name + " | " + "Country: " + weatherData.sys.country;
      document.getElementById("type").innerHTML = "Feels Like " + weatherData.weather[0].main + " In " + weatherData.name;
      document.getElementById("temp").innerHTML = "Temperature: " + Math.round(celcius) + "°C";
    } else {
      document.getElementById("type").innerHTML = "Location not found";
    }
    //   show(document.getElementById('hide'));
  }

  document.title = "Weather";

  return (
    <>

      <section className="text-gray-700 body-font">
        <form onSubmit={onSubmit}>
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img id="image" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero" src={imageURL} />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Please Enter Location</h1>
              {/* <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p> */}
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  {/* <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label> */}
                  <input required type="text" id="hero-field" name="hero-field"
                    className="w-full bg-gray-100 rounded border border-gray-300
           focus:border-indigo-500 text-base outline-none text-gray-700 
           py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={inputEvent}
                  />
                </div>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Temperature and Weather details Mentioned below</p>
              <div className="flex">
                <button id="hide" className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">

                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span id="city" className="text-xs text-gray-600 mb-1"></span>
                    <br />
                    <span id="temp" className="title-font font-medium"></span>
                    <br />

                    <span id="type" className="title-font font-medium"></span>
                  </span>
                </button>
                {/* <button type="submit" className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-300 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button> */}
              </div>
            </div>
          </div>
        </form>
      </section>

    </>
  );
}

export default Wheather;