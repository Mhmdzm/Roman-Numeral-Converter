document.getElementById('convert-btn').addEventListener('click', function() {
    var inputNumber = parseInt(document.getElementById('number').value);
  
    var outputElement = document.getElementById('output');
  
    if (isNaN(inputNumber)) {
      outputElement.textContent = "Please enter a valid number";
    } else if (inputNumber <= -1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputNumber >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else {

      outputElement.textContent = convertToRoman(inputNumber);
    }
  });
  
  function convertToRoman(num) {
    var romanNumeral = "";
    var romanNumeralMap = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];
  
    for (var i = 0; i < romanNumeralMap.length; i++) {
      while (num >= romanNumeralMap[i].value) {
        romanNumeral += romanNumeralMap[i].numeral;
        num -= romanNumeralMap[i].value;
      }
    }
  
    return romanNumeral;
  }