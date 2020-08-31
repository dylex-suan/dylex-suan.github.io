// /* FOR SCROLLING */
// window.onscroll = function () {
//     myFunctiontoScroll();
// }

// // Get the nav bar from the HTML file
// var navbar = document.getElementsByClassName("dropdown");

// // Offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to navbar when the scroll position is reached! Remove the sticky when the scroll position is passed 
// function myFunctiontoScroll() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

// There's an error being triggered: 
// window.onscroll = function () {
//     myFunction()
// };

// var navbar = document.getElementById("dropdown");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }
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