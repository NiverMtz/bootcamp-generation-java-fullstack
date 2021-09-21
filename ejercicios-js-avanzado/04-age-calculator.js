let   yearOfBirth = prompt('Ingresa tu fecha de nacimiento, por favor.')

function yearCalculator (yearOfBirth)  {
  let currentYear = new Date().getFullYear()
  let age = currentYear - yearOfBirth;
  return age
}

document.write(`Este año cumples o cumpliste: ${yearCalculator(yearOfBirth)} años.`)