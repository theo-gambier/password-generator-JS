let length = document.querySelector('#length').value;
let number = document.getElementsByName('number');
let special = document.getElementsByName('special');
let button = document.getElementById('button');

let containerPassword = document.getElementById('containerPassword');
const outputText = document.querySelector('#password');

// Tableau contenant des lettres minuscules
let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Tableau contenant des lettres majuscules
let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Tableau contenant des nombres
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Tableau contenant des caractères spéciaux
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '~'];

function isWanted (input){
    return input[0].checked;
}

let wantNumber;
let wantSpecials

button.addEventListener('click', function (e){
    e.preventDefault()
    let length = document.querySelector('#length').value;
    let number = document.getElementsByName('number');
    let special = document.getElementsByName('special');

    wantNumber = isWanted(number);
    wantSpecials = isWanted(special);

    tableSearch = [lowercaseLetters, uppercaseLetters];

    if (wantNumber){
        tableSearch.push(numbers);
    }
    if (wantSpecials){
        tableSearch.push(specialCharacters);
    }

    let output = '';

    for (let i= 0; i < length; i++ ){
        let tableNumber = Math.floor(Math.random() * tableSearch.length);
        let charNumber = Math.floor(Math.random() * tableSearch[tableNumber].length);
        output += tableSearch[tableNumber][charNumber];
    }

    containerPassword.style.display = 'flex';
    outputText.value = output;
})