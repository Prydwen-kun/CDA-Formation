function taggedString(strings, quatre, quinze) {
  strings.forEach((element) => {
    console.log(element);
  });

  return `${strings[3]}${strings[2]}${strings[1]}${strings[0]} and ${quatre} and ${quinze}`;
}

const taggedStringOut = taggedString`String f${'text'}${'text1'}${'text2'}`;

const outDiv = document.getElementById("out");

outDiv.innerHTML = taggedStringOut.replaceAll(" ", " | ");
