
//Variables

const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '!@#$%^&*_-+=';

// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  let password = generatePassword();

  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}

function generatePassword() {
  
    //Prompt Char len
    let pwLen = prompt(' Secure Password Generator:\n Please enter the length of your password.\n Must be between 8 and 128 characters.');

    //Define Output in Alert for Invalid pwLen range
    let badLen = 'Sorry! Your Password must been the Password Length criteria.\n Please enter a value between 8 and 128 characters.';
    //Define output in Alert if pwLen is not a number
    let notNum = 'Sorry! You need to input MUST be a NUMBER between 8 and 128';
    //Define output in Alert if all confirm() prompts are false.
    let allFalse = 'Hmmmmmm...\nIt seems like you did not choose any criteria.\nPlease try again!';

    function retry(alertMsg){
      //Alert the User
      alert(alertMsg);
      //Restart generatePassword();
      generatePassword();
    }

    function end(){
      //Refreshed the Page to remove the 'undefined' output
      window.location.reload();
      //End Function
      return;
    }

    function confirmPrompts(){
      //Execute Confirm prompts
      //Confirm lower case
      lowerCase = confirm('Would you like to include Lower Case Letters?');
      //Confirm Upper case
      upperCase = confirm('Would you like to include Upper Case Letters?');
      //Confirm number
      num = confirm('Would you like to include numbers:\n0 1 2 3 4 5 6 7 8 9');
      //confirm spec char
      specialChar = confirm('Would you like to include Special Characters:\n! @ # $ % ^ & * _ - + =');
    }

    //Switch instead of a lengthy IF / ELSE IF series
    switch(true){
      //If pwLen is NULL (User hits Cancel on first prompt)
      case (pwLen === null): 
        end();
        break;
      //If pwLen is not in the required range
      case (pwLen < 8) || (pwLen > 128):
        retry(badLen);
        break;
      //If pwLen is not a number
      case isNaN(pwLen):
        retry(notNum);
        break;
      //If all other statements are not met
      default:
        confirmPrompts();
    }

    //If User hits Cancel on all Confirm(); Have them try again
    if(!lowerCase && !upperCase && !num && !specialChar){
      retry(allFalse);
    }
    
    //Create a string to store all the characters in to choose from
    let charset = '';
  
    //Append selected inputs to characters set
    //Ternary instead of lengthy if statements
    lowerCase ? charset += lowerChar : '';
    upperCase ? charset += upperChar : '';
    num ? charset += numbers : '';
    specialChar ? charset += special : '';

    //Create a string to store password characters in for each cycle of the forloop 
    let pw = ""; 
  
    for (let i = 0; i < pwLen; i++) {
      //Select Character to add to 'pw' string using charAt
      pw += charset.charAt(
        //Select a number to associate to the charAt based on the length of the 'characters' string
        Math.floor(Math.random() * charset.length)
      );
    }
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

