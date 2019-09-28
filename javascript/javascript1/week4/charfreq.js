function getCharacterFrequencies(word) {
  const wordSplit = word.split('');
  const characters = [];
  let idx = 0;

  for (let i = 0; i < wordSplit.length; i++) {

    if (characters.length !== 0) {
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].character.includes(wordSplit[i])) {
          idx = j;
          characters[idx].count += 1;
        }
      }

      if (!characters[idx].character.includes(wordSplit[i])) {
        characters.push({
          character: wordSplit[i],
          count: 1,
        });
      }

    } else {
      characters.push({
        character: wordSplit[i],
        count: 1,
      });
    }
  }
  return characters;
}console.log(getCharacterFrequencies('happy'))