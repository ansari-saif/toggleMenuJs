function hideFunction() {
    var element = document.getElementById("dataToHide");
    if (element.hasAttribute("hidden")) {
        element.removeAttribute("hidden");

    } else {
        element.setAttribute("hidden", "hidden");

    }
}