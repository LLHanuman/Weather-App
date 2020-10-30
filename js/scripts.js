// click function works
$("#search").click(function() {
    event.preventDefault();
    console.log("clicked")
        // List and save search on the left of screen.

    // Get input from the search bar
    var searchedCity = document.getElementById("addCity").value;
    localStorage.setItem('prevCity', searchedCity);
    document.getElementById("History").innerHTML = searchedCity
    console.log(searchedCity)

    // save input from search bar to local storage


    // set up api for weather

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" +
            searchedCity +
            "&units=imperial" +
            "&APPID=7aeac4ad23af6689f29104e2388565d8"

    }).then(function(response) {
        // day 1
        $(".d1desc").text(response.list[0].weather[0].description)
        $(".d1mintemp").text("Min temmpreture: " + Math.floor(response.list[0].main.temp_min) + "\u00B0");
        $(".d1maxtemp").text("Max tempreture: " + Math.floor(response.list[0].main.temp_max) + "\u00B0");

        // day 2
        $(".d2desc").text(response.list[1].weather[0].description)
        $(".d2mintemp").text("Min temmpreture: " + Math.floor(response.list[1].main.temp_min) + "\u00B0");
        $(".d2maxtemp").text("Max tempreture: " + Math.floor(response.list[1].main.temp_max) + "\u00B0");

        // day 3
        $(".d3desc").text(response.list[2].weather[0].description)
        $(".d3mintemp").text("Min temmpreture: " + Math.floor(response.list[2].main.temp_min) + "\u00B0");
        $(".d3maxtemp").text("Max tempreture: " + Math.floor(response.list[2].main.temp_max) + "\u00B0");

        // day 4
        $(".d4desc").text(response.list[3].weather[0].description)
        $(".d4mintemp").text("Min temmpreture: " + Math.floor(response.list[3].main.temp_min) + "\u00B0");
        $(".d4maxtemp").text("Max tempreture: " + Math.floor(response.list[3].main.temp_max) + "\u00B0");

        // day 
        $(".d5desc").text(response.list[4].weather[0].description)
        $(".d5mintemp").text("Min temmpreture: " + Math.floor(response.list[4].main.temp_min) + "\u00B0");
        $(".d5maxtemp").text("Max tempreture: " + Math.floor(response.list[4].main.temp_max) + "\u00B0");


        // calling the url for the icon
        const icon = `http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}.png`;
        // adding the icon to the html
        $(".d1icon").attr('src', `http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}.png`)
    })
});