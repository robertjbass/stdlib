//* Pass in an array of items and get a single random item from the array back
export const pickRandomItemFromArray = (optionsArray: any[]): any => {
  let startingNumber = 0;
  let newReturnValues: any[] = [];
  let returnNewValues: any[] = [];
  const returnValues: any[] = [];
  const options: any[] = [...optionsArray];
  const brackets = 10 / options.length;

  options.forEach((_item, i) => {
    if (i === 0) {
      returnValues.push(brackets);
      startingNumber = brackets;
    } else if (i < options.length - 1) {
      returnValues.push(brackets + startingNumber);
      startingNumber += startingNumber;
    } else {
      returnValues.push(brackets + startingNumber);
    }
    returnNewValues = [...returnValues];
    newReturnValues = returnValues.sort(() => Math.random() - 0.5);
  });

  return options[returnNewValues.indexOf(newReturnValues[1])];
};

// Return true or false randomly
export const randomBoolean = (): boolean => Math.random() >= 0.5;
export const randomNumber = (max: number): number =>
  Math.round(Math.random() * max);

export const randomNumberBetween = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min) + min);

export const randomIdString = (): string =>
  Math.random().toString(36).substring(2);

export const randomHexCode = (): string =>
  `#${Math.random().toString(16).slice(2, 9).padEnd(6, '0')}`;

export const randomHexCodeLegacy = (): string =>
  `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;
