if (document.cookie != "") {
    const themeCookieValue = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
    document.getElementById("stylesheet-link").href = themeCookieValue;
} else {
    document.cookie = "theme=style-lightmode.css;";
    const themeCookieValue = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
}
function switchLights(){
    const themeCookieValue = document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1];
    if (themeCookieValue == "style-lightmode.css") {
        document.cookie = "theme=style-darkmode.css;";
        document.getElementById("stylesheet-link").href = "style-darkmode.css";
    } else if (themeCookieValue == "style-darkmode.css") {
        document.cookie = "theme=style-lightmode.css;";
        document.getElementById("stylesheet-link").href = "style-lightmode.css";
    } else {
        document.cookie = "theme=style-darkmode.css;";
        document.getElementById("stylesheet-link").href = "style-lightmode.css";
    }

}
