# Random - Packages that assist with randomizing results

## Random List Item

### Return a single semi-random value from an array of any type 

```ts
import {pickRandomItem} from './random/randomListItem'

const stringArray: string[] = ["One", "Two", "Three", "Four", "Five"]
console.log(pickRandomItem(stringArray))


const numberArray: number[] = [1,2,3,4,5]
console.log(pickRandomItem(numberArray))

const objectArray = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith"
  },
  {
    id: 2,
    firstName: "Susan",
    lastName: "Johnson"
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Wilson"
  }
]
console.log(pickRandomItem(objectArray))
```