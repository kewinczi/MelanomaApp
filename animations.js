function animateContent() {
    document.getElementById("main").classList.remove("animate");
    setTimeout(function(){ document.getElementById("main").classList.add("animate"); }, 0);
}

var links = document.getElementsByClassName("nav-link");
console.log(links);
Object.keys(links).map(link => links[link].addEventListener("click", animateContent));