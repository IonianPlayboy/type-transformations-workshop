import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type FruitsArray = typeof fruits;
type AppleOrBanana = FruitsArray[0] | FruitsArray[1];
type Fruit = FruitsArray[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
