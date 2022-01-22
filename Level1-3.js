/** LEVEL 1.3
 * Give your plants CO2 by talking to them. Complete the following function 
 * that converts any string into Plant-Latin so that your plants can 
 * understand you.

 * NOTES: Plant-Latin has different vowels than we do. Append "tiva" after 
 * every vowel "a", "llia" after every vowel "e", "mus" after every vowel 
 * "i", "phylum" after every vowel "o", and "rea" after every vowel "u". 
 * For example: "I love water!" becomes "Imus lophylumvellia wativatelliar!"
 */

/**
 * Converts a message into Plant-Latin.
 * @param {string} message - The message to be translated in lowercase.
 * @return {string} - Translated Plant-Latin message.
 */

function translatePlantLatin(message) {
  const vowelReps = {
    a: 'tiva',
    e: 'llia',
    i: 'mus',
    o: 'phylum',
    u: 'rea'
  };
  
  let plMsg = '';
  const lowerMsg = message.toLowerCase();
  
  for (let i = 0; i < message.length; i++) {
    plMsg += lowerMsg[i];
    for (v in vowelReps) {
      if (v == lowerMsg[i]) {
        plMsg += vowelReps[v];
      }
    }
  }

  return plMsg;
}

/* My original solution
function translatePlantLatin(message) {
  let plMsg = '';

  for (let i = 0; i < message.length; i++) {
    plMsg += message[i];
    if (message[i] == 'a' || message[i] == 'A') {
      plMsg += 'tiva';
    } else if (message[i] == 'e' || message[i] == 'E') {
      plMsg += 'llia';
    } else if (message[i] == 'i' || message[i] == 'I') {
      plMsg += 'mus';
    } else if (message[i] == 'o' || message[i] == 'O') {
      plMsg += 'phylum';
    } else if (message[i] == 'u' || message[i] == 'U') {
      plMsg += 'rea';
    }
  }

  return plMsg.toLowerCase();
}
*/