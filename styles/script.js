const hamburgerIcon = document.querySelector(".burger");
const navMenu = document.querySelector(".mainNav");


hamburgerIcon.addEventListener('click', function () {
    document.getElementById('mainNav').style.visibility = 'visible';
});
