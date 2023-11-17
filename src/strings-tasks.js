// 15,2
const getStringLength = (str = '') => (str ? str.length : 0);
const isString = (str) => typeof str === 'string' || str instanceof String;
const concatenateStrings = (a, b) => a + b;
const getFirstChar = (str) => str.charAt(0);
const removeLeadingAndTrailingWhitespaces = (str) => str.trim();
const removeLeadingWhitespaces = (str) => str.trimStart();
const removeTrailingWhitespaces = (str) => str.trimEnd();
const repeatString = (str, count) => str.repeat(count > 0 ? count : 0);
const removeFirstOccurrences = (str, remove) => str.replace(remove, '');
const removeLastOccurrences = (str, remove) =>
  str && str.includes(remove)
    ? str.slice(0, str.lastIndexOf(remove)) +
      str.slice(str.lastIndexOf(remove) + remove.length)
    : str;
const sumOfCodes = (str) =>
  str ? str.split('').reduce((a, b) => a + b.charCodeAt(), 0) : 0;
const startsWith = (str, substr) => str.startsWith(substr);
const endsWith = (str, substr) => str.endsWith(substr);
const formatTime = (m, s) =>
  `${`${m}`.padStart(2, '0')}:${`${s}`.padStart(2, '0')}`;
const reverseString = (str) => str.split('').reverse().join('');
const orderAlphabetically = (str) =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
const containsSubstring = (str, substr) => str.includes(substr);
const countVowels = (str) =>
  str
    .split('')
    .filter((letter) =>
      ['a', 'e', 'i', 'o', 'u', 'y'].includes(letter.toLowerCase())
    ).length;
const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return reverseString(cleanStr) === cleanStr;
};
const findLongestWord = (sentence) => {
  let longest = [];
  sentence.split(' ').forEach((item) => {
    if (item.length > longest.length && item.length !== longest.length)
      longest = item;
  });
  return longest;
};
const reverseWords = (str) =>
  str
    .split(' ')
    .map((item) => reverseString(item))
    .join(' ');
const invertCase = (str) =>
  str
    .split(' ')
    .map((item) =>
      item
        .split('')
        .map((child) =>
          child.toLowerCase() === child
            ? child.toUpperCase()
            : child.toLowerCase()
        )
        .join('')
    )
    .join(' ');
const getStringFromTemplate = (firstName, lastName) =>
  `Hello, ${firstName} ${lastName}!`;
const extractNameFromTemplate = (str) => str.replace(/Hello, |!/g, '');
const unbracketTag = (str) => str.replace(/<|>/g, '');
const extractEmails = (str) => str.split(';');
const encodeToRot13 = (str) => {
  return str
    .split('')
    .map((item) => {
      const itemAscii = item.charCodeAt();

      const isLetter =
        (itemAscii > 64 && itemAscii < 91) ||
        (itemAscii > 96 && itemAscii < 123);

      if (!isLetter) return item;

      const itemAsciiDiapason =
        (itemAscii <= 90 && itemAscii + 13 > 90) ||
        (itemAscii <= 122 && itemAscii + 13 > 122);

      return itemAsciiDiapason
        ? String.fromCharCode(itemAscii - 13)
        : String.fromCharCode(itemAscii + 13);
    })
    .join('');
};
const getCardId = (value) =>
  [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ].indexOf(value);

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
