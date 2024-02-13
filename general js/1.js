const string = 'привет! как дела?';
const vowels = ['у', 'е', 'а', 'и', 'о', 'ы', 'э', 'ё', 'я', 'ю'];

const getVowels = stringToFilter => {
  let extractedVowels = '';

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));

