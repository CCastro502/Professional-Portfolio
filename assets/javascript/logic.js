const images = [
    ["Climate Change App", "assets/images/climate-change-app.png", "https://father-climate-app-1.herokuapp.com/", "The Climate Change App was created to allow people to observe the historical weather changes occurring in their (or any other) region. Once entering a location in the search bar, a geolocation API determines the lattitude and longitude of the location. That info is then given to Leaflet to create a map of the area and then sent to Dark Sky API over 300 times to receive the historical weather information for that location. After a few seconds of retrieving that information from Dark Sky, personally created mathematical operations are used to determine the month-by-month averages of the course of 10 years. Those averages are then applied to a chart, using Chart.js. It is a MERN-stack application built by myself and one other person. This app is still in development"],
    ["NiCoSol", "assets/images/nicosol.png", "https://nicosol.com/", "NiCoSol is a Colorado-based IT consulting firm. I am responsible for the design and deployment of their web-page, which is currently still in production. This website is built with PHP, CSS, and JavaScript."],
    ["Project Foodie", "assets/images/Project-Foodie.png", "https://fathomless-coast-18976.herokuapp.com/", "Project-Foodie was created with the desire to create an international-style food blog to learn and re-create different cultural cuisines. This project was created in the span of a week with a 4-member team during the second month of the three-month full-time Full Stack Developer Boot Camp at the University of Denver. It is a full stack application, using Node.js and Express for the back-end languages, with Handlebars, CSS and JavaScript being the primary front-end languages, while the database is managed with MySQL. The project was developed using an MVC architecture with Git as source control. As a full stack developer for this project, my code touched nearly every file, including design of the user-authentication system in a few hours."],
    ["Multiplayer RPS", "assets/images/RPS.png", "https://ccastro502.github.io/RPS-Multiplayer/", "This Rock-Paper-Scissors app was created as homework in the middle of the Full Stack Coding Boot Camp at the University of Denver. The design is built with pure HTML and CSS, with JavaScript logic. The multiplayer capability and database is managed by Amazon's Firebase"]
]
let count = 0;
let reset;

$('#title').slideDown(3500);

displayImage = () => {
    var [title, path, link, description] = images[count];
    $("#img").attr("src", path);
    $("#slide").html(`<p>( ${count + 1} / 4 ) <a href='${link}' target='_blank' id='project-link'>${title} (click me)</a></p>`);
    $("#spec-tech").text(description);
    reset = setTimeout(nextImage, 10000);
}

nextImage = () => {
    count++;
    if (count === images.length) {
        count = 0;
    }
    displayImage();
}

$("#next").on("click", (event) => {
    event.preventDefault();
    switch (count) {
        case 3:
            count = 0;
            clearTimeout(reset);
            displayImage();
            break;
        default:
            count++;
            clearTimeout(reset);
            displayImage();
            break;
    }
})

$("#previous").on("click", (event) => {
    event.preventDefault();
    switch (count) {
        case 0:
            count = 3;
            clearTimeout(reset);
            displayImage()
            break;
        default:
            count--;
            clearTimeout(reset);
            displayImage();
            break;
    }
})




displayImage();