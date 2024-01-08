const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission
    container.classList.add("right-panel-active");

});

signInButton.addEventListener('click', (e) => {
    // Prevent the default form submission
    container.classList.remove("right-panel-active");
});



signInButton.addEventListener('click', (e) => {
    // Prevent the default form submission
    e.preventDefault();
    container.classList.remove("left-panel-active");
});


