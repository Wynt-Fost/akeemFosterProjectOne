// 1. create variables to store stuff
// 2. Be able to click the hamburger icon so that it registers as  a click event
// 3. once click tell code to make my hidden nav bar visible.



// creating a const for my hamburger icon
const hamburgerIcon = document.querySelector(".burger");

// creating a const fot my nav
const navMenu = document.querySelector(".mainNav");


// making my icon clickable while adding the ability to show my hidden nav bar once clicked.
hamburgerIcon.addEventListener('click', function () {
    document.getElementById('mainNav').style.visibility = 'visible';
});


