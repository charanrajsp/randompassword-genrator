
const passwordField = document.getElementById("Password");
const lengthSlider = document.getElementById("pgrbar");
const rangeValue = document.getElementById("rangeValue");
const includeNumbers = document.getElementById("number");
const includeSpecial = document.getElementById("splchar");
const includeAlphabets = document.getElementById("alpchar");


const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '{', '}', '[', ']', ';', ':', '<', '>', ',', '.', '?', '/'];
const alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']; // Spreads letters into an array

//  range value display
function updateRangeValue() 
{
    rangeValue.textContent = `Length: ${lengthSlider.value}`;
}

// Function to Generate Password
function generatePassword() 
{
    const length = parseInt(lengthSlider.value);
    let characters = [];
    let password = "";

    if (includeNumbers.checked) 
        {
        characters = characters.concat(numbers);
    }
    if (includeSpecial.checked) 
        {
        characters = characters.concat(specialChars);
    }
    if (includeAlphabets.checked)
         {
        characters = characters.concat(alphabets);
    }

    if (characters.length === 0) 
        {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < length; i++) 
        {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordField.value = password;
}


function copyPassword() 
{
    if (passwordField.value) 
        {
        navigator.clipboard.writeText(passwordField.value);
        alert("Password copied to clipboard!");
    } else 
    {
        alert("Pleaase Generate a password first!");
    }
}
