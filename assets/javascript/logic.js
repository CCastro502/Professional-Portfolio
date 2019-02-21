const images = [
    ["Project Foodie", "assets/images/Project-Foodie.png", "https://fathomless-coast-18976.herokuapp.com/", "Node.js", "Express.js", "MongoDB", "Handlebars"],
    ["Multiplayer Rock Paper Scissors", "assets/images/RPS.png", "https://ccastro502.github.io/RPS-Multiplayer/", "Firebase", "JQuery", "Bootstrap styling"], 
    ["Project Elevation", "assets/images/How-High.png", "https://jmemmett.github.io/Project1/", "Multiple APIs used in concert", "Leaflet.js", "JQuery", "Bootstrap styling"],
    ["Friend Finder", "assets/images/Friend-Finder.png", "https://morning-everglades-22263.herokuapp.com/survey", "Node.js", "Express.js", "Boostrap styling"]
]
let count = 0;
let reset;

displayImage = () => {
    var [title, path, link, ...techs] = images[count];
    $("#img").attr("src", path);
    $("#slide").html(`<p>( ${count + 1} / 4 ) <a href='${link}' target='_blank' id='project-link'>${title} (click me)</a></p>`);
    const techList = [
        "<tr><th>Technologies</th></tr>", 
        ...techs.map(tech => `<tr><td>${tech}</td></tr>`)
    ];
    $("#spec-techs").html(techList);
    reset = setTimeout(nextImage, 5000);
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