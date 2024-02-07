const showMap = (userInput) => {
  // TODO: Construct the URL (with apiKey & userInput) and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=pk.eyJ1Ijoia2liZXgiLCJhIjoiY2tsMHBmYWo1MHduajJubXNrYjlpdjhmYyJ9.5d7IeuXZd5fvxAk8-7Zm5A`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const long = data.features[0].center[0];
      const lat = data.features[0].center[1];
      document.getElementById("long").insertAdjacentText("beforeend", long);
      document.getElementById("lat").insertAdjacentText("beforeend", lat);
      console.log(data);
      // p.insertAdjacentText("beforeend", lat);
      // TODO: Insert the info into the DOM
      // - Extract the coordinates from the parsed JSON response (lang, lat)
      // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates
    });
};

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (event) => {
  const input = document.getElementById('chicken').value;
  event.preventDefault();
  showMap(input);
});
// TODO: Select the form element
// TODO: Add event listener to the form that:
// - Prevents the default form submission behavior
// - Get the user input
// - Calls the showMap function with the user input as an argument
