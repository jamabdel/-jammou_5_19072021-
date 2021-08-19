const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
form.addEventListener('input', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();

    if (firstNameValue === '') {

        setErrorFor(firstName, 'firstName cannot be blank');
    } else if (!regexText(firstNameValue)) {
        setErrorFor(firstName, 'Not a valid Name');
    } else {
        setSuccessFor(firstName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!regexMail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, ' lastName cannot be blank');
    } else if (!regexText(lastNameValue)) {
        setErrorFor(lastName, 'Not a valid Name');
    } else {
        setSuccessFor(lastName);
    }

    if (addressValue === '') {
        setErrorFor(address, 'address cannot be blank');
    } else if (!regexAdress(addressValue)) {
        setErrorFor(address, 'Not a valid address');
    } else {
        setSuccessFor(address);
    }

    if (cityValue === '') {
        setErrorFor(city, 'city cannot be blank');
    } else if (!regexText(cityValue)) {
        setErrorFor(city, 'Not a valid city Name');
    } else {
        setSuccessFor(city);
    }


    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function regexMail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

    function regexText(Text) {
        return /^[A-Za-z]{2,24}$/.test(Text);

    }

    function regexAdress(Adress) {
        return /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/.test(Adress);

    }
}