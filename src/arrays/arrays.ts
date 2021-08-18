// Create an array of sorted numbers

import { HashMap, TopBottom } from '../types/interfaces';

// generateSortedNumberArray( 5 ) => [ 0, 1, 2, 3, 4 ]
export const generateSortedNumberArray = (length: number): number[] => [
  ...Array(length).keys(),
];

// Return an array of a specified length of booleans
// booleanArray( 2 ) => [ false, false ] | booleanArray( 2, true ) => [ true, true ]
export const booleanArray = (length: number, value = false): boolean[] =>
  Array(length).fill(value);

// Return a copy of the array with only unique values
export const removeDuplicatesFromArray = (target: any[]): any[] => [
  ...new Set(target),
];

// Shuffle Array
export const shuffleArray = (target: any[]): any[] =>
  [...target].sort(() => Math.random() - 0.5);

export const countUniqueValuesInArray = (arr: any[]): HashMap => {
  let hashMap: HashMap = {};
  for (let item of arr) {
    const itemStr = item.toString();
    if (hashMap[itemStr]) {
      hashMap[itemStr] = hashMap[item] + 1;
    } else {
      hashMap[itemStr] = 1;
    }
  }
  return hashMap;
};

export const getMinMaxFromHashmap = (hashMap: HashMap): TopBottom => {
  let topValue: any;
  let topCount: number = 0;
  let bottomValue: any;
  let bottomCount: number | undefined;
  for (let item in hashMap) {
    if (!bottomCount) {
      bottomCount = hashMap[item];
    } else if (hashMap[item] < bottomCount) {
      bottomCount = hashMap[item];
      bottomValue = item;
    }

    if (hashMap[item] > topCount) {
      topCount = hashMap[item];
      topValue = item;
    }
  }
  return { topValue, bottomValue };
};

export const getMinMaxFromArray = (arr: any[]): TopBottom => {
  return getMinMaxFromHashmap(countUniqueValuesInArray(arr));
};
