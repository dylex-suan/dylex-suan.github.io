// /* NAVIGATION SITE -- MENU BUTTON */

// Used to connect with the mainpage.html file
// When user clicks on the button, we can toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onClick = function (event) {
    // If the event DOES not match the target for the dropbutton...
    if (!event.target.matches('.dropbtn')) {
        // Then we get the 'dropdown-content' class
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        // Next, get all of the elements within the "dropdown-content" name and show them.
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}