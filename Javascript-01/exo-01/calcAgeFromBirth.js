function calculateAge(birthDate) {
  let birthParsed = Date.parse(birthDate);
  let dateNow = Date.now();
  //   console.log("birth input:", birthParsed / 3600000, "Hours since 1970");
  //   console.log("Date now:", dateNow / 3600000, "Hour since 1970");
  //   console.log("Date now:", dateNow / 86400000, "days since 1970");
  //   console.log("Date now:", dateNow / 31536000000, "years since 1970");

  if (birthParsed < 0) {
    return (Math.abs(birthParsed) + dateNow) / 31536000000;
  } else {
    return (dateNow - birthParsed) / 31536000000;
  }
}

const prompt = require("prompt-sync")();

let inputBirth = prompt("Enter Birth Date:");

console.log(calculateAge(inputBirth),' years');
