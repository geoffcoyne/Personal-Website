if (document.cookie != "") {
    document.getElementById("stylesheet-link").href = document.cookie;
} else {
    document.cookie = "style-lightmode.css";
    document.getElementById("stylesheet-link").href = document.cookie;
}
function switchLights(){
    if (document.cookie == "style-lightmode.css") {
        document.cookie = "style-darkmode.css";
        document.getElementById("stylesheet-link").href = document.cookie;
    } else if (document.cookie == "style-darkmode.css") {
        document.cookie = "style-lightmode.css";
        document.getElementById("stylesheet-link").href = document.cookie;
    } else {
        document.cookie = "style-darkmode.css";
        document.getElementById("stylesheet-link").href = document.cookie;
    }

}
