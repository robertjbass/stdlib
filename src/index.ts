import {
  booleanArray,
  countUniqueValuesInArray,
  generateSortedNumberArray,
  getMinMaxFromArray,
  getMinMaxFromHashmap,
  removeDuplicatesFromArray,
  shuffleArray,
} from './arrays/arrays';
import {
  pickRandomItemFromArray,
  randomBoolean,
  randomHexCode,
  randomHexCodeLegacy,
  randomIdString,
  randomNumber,
  randomNumberBetween,
} from './random/random';

const stringArray: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
console.log(pickRandomItemFromArray(stringArray));

const numberArray: number[] = [1, 2, 3, 4, 5];
console.log(pickRandomItemFromArray(numberArray));

const objectArray = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    id: 2,
    firstName: 'Susan',
    lastName: 'Johnson',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Wilson',
  },
];
console.log(pickRandomItemFromArray(objectArray));

console.log(randomBoolean());
console.log(randomNumber(100));
console.log(randomNumberBetween(-100, 100));
console.log(randomIdString());
console.log(randomHexCode());
console.log(randomHexCodeLegacy());
console.log(generateSortedNumberArray(5));
console.log(booleanArray(5, true));
console.log(removeDuplicatesFromArray([0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]));
console.log(shuffleArray([0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]));

const mixedArray = ['sam', 1, 1, true, 'sam', 1, true, 'ellis', 2, 2, 'aaron'];
const hashMap = countUniqueValuesInArray(mixedArray);
console.log(hashMap);

console.log(getMinMaxFromHashmap(hashMap));

console.log(getMinMaxFromArray(mixedArray).topValue);
console.log(getMinMaxFromArray(mixedArray).bottomValue);
