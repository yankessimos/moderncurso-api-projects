// Init storage
const storage = new Storage();
// Get storage location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;

    // Change location
    weather.changeLocation(city, state);

    // Set location in LS
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal
    $("#locModal").modal("hide");
});

function getWeather() {
    weather
        .getWeather()
        .then((results) => {
            ui.paint();
        })
        .catch((err) => console.log(err));
}
