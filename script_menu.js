document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("menu-btn");
    var element = document.getElementById("no_show");

    toggleButton.addEventListener("click", function() {
        if (element.id === "no_show") {
            element.id = "show";
        } else {
            element.id = "no_show";
        }
    });
});
