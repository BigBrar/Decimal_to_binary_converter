//function to convert decimal to hexadecimal
function decimalToHexadecimal(decimalNumber) {
    console.log("Decimal number provided - ", decimalNumber);
    
    // Check if the input is a valid number
    if (!isNaN(decimalNumber)) {
      // Convert decimal to hexadecimal
      const hexadecimalEquivalent = parseInt(decimalNumber).toString(16).toUpperCase();
  
      console.log("The output is - ", hexadecimalEquivalent);
      return hexadecimalEquivalent;
    } else {
      // Return an error message for invalid input
      return 'Invalid input. Please enter a valid decimal number.';
    }
  }
  
  
  
  // function to convert decimal to octal
  function decimalToOctal(decimalNumber) {
    console.log("Decimal number provided - ", decimalNumber);
    
    // Check if the input is a valid number
    if (!isNaN(decimalNumber)) {
      // Convert decimal to octal
      const octalEquivalent = parseInt(decimalNumber).toString(8);
  
      console.log("The output is - ", octalEquivalent);
      return octalEquivalent;
    } else {
      // Return an error message for invalid input
      return 'Invalid input. Please enter a valid decimal number.';
    }
  }
  
  // Example usage:
  // const decimalInput = 1212;
  // const octalOutput = decimalToOctal(decimalInput);
  // console.log(`Decimal: ${decimalInput}, Octal: ${octalOutput}`);
  
  
  
  
  
          //Initial References
  let decInp = document.getElementById("dec-inp");
  let hexInp = document.getElementById("hex-inp");
  let binInp = document.getElementById("bin-inp");
  let octInp = document.getElementById("oct-inp");
  let errorMsg = document.getElementById("error-msg");
  
  //Convert decimal to binary when user inputs in the decimal field
  decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    //Converts the decimal value to binary
    binInp.value = decValue.toString(2);
    hexInp.value = decimalToHexadecimal(decInp.value)
    octInp.value = decimalToOctal(decInp.value)
  });
  
  //Convert binary to decimal when user inputs in the binary field
  binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    //If the binary number is valid convert it to decimal
    if (binValidator(binValue)) {
      decInp.value = parseInt(binValue, 2);
      hexInp.value = decimalToHexadecimal(decInp.value)
      octInp.value = decimalToOctal(decInp.value)
      errorMsg.textContent = "";
    }
    //Else display an error message
    else {
      errorMsg.textContent = "Please Enter An Valid Binary Input";
    }
  
  
    
  
    //Function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
    function binValidator(num) {
      for (let i = 0; i < num.length; i++) {
        if (num[i] != "0" && num[i] != "1") {
          return false;
        }
      }
      return true;
    }
  
  });
  // Dark mode toggle functionality
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
