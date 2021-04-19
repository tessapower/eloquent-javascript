# Stuff that I always forget about Javascript

## Arrays

- You can iterate over arrays using the `for (let element of array) {...}` loop.
- `array.shift();` removes the element from the _start_ of the array.
- `array.unshift();` adds an element to the _start_ of the array.
- `array.pop();` removes the element from the _end_ of the array.
- `array.push();` adds an element to the _end_ of the array.
- `array.includes(element);` checks if given element exists in array.
- `array.indexOf(element);` returns the index of given element, or -1 if it doesn't exist.
- `array.lastIndexOf(element);` returns last index of given element, or -1 if it doesn't exist.
- `array.indexOf(someFunc);` returns first value for which given function returns true.
- `array.slice(startIndex, endIndex);` returns array with only elements between startIndex and endIndex.
- `array.concat(element);` returns _new_ array with given element at end of original array.
- `array.forEach(element => ...);` ~ "Given `element`, for each index of the array do the following..." 
- `array.filter(element => someTest);` returns _new_ array with filtered element in an array based on the result of `someTest`.
- `map(array, element => someFunction);` applies a function to all elements and creates a new array with returned values.
- `array.some(someFunc);` tests whether a function returns true for any element in array.

## Objects

- `Object.keys(someObject)` checks what properties an object contains (not what keys the prototype contains).
- `anObject.hasOwnProperty("prop");` returns whether the object has the given property.
- `"prop" in anObject` returns whether anObject has a property "prop".
- Private properites have underscores at the start of their name, e.g. `_prop`.


## Strings

- `"Some string".trim();` removes \s, \n, \t.
- `let someVar = "Some string".split(substring);` splits a string at every occurrence of some substring.
- `someVar.join(someString);` joins the individual strings by some string.
- `"Some string".repeat(n);` creates a new string with n copies of the original string glued together.

## Maps

- Data structure that associates values (keys) with other values.
- `let newMap = new Map();`
- `newMap.set("someKey", someValue);` sets the key under the given name as the given value.
- `newMap.get("someKey");` returns the value of the give key.
- `newMap.has("someKey");` returns whether the map contains a key by the given name.

## Functions

- "Spread"! Pass in all of the arguments with an array: `function someFunc(...args) {...}`
- Spread can be used in amongst other args, `someFunc(9, ...numbers, 2);`
- `m => ...` ~ "given m, do the following..."
- Functions have call methods, which let you pass the `this` parameter explicity
- Arrow functions do not bind their own `this`, but can see the `this` binding of the scope around them.

## Prototypes

- Fallback source of properties.
- `Object.prototype` = the "great ancestral prototype", a.k.a. the entity behind almost all objects.
- `Object.getPrototypeOf(someObj);` returns prototype of given object.
- Functions derive from `Function.prototype`.
- Arrays derive from `Array.prototype`.
- `Object.create(somePrototype)` creates an object with a specific prototype.
- Class declarations only allow methods (properties that hold functions) to be added to the prototype; directly manipulate the prototype after defining the class.

## Classes

- `someObj instanceOf someClass` returns whether an object was derived from a specific class. 

## Iterators

- Objects given to a `for/of` loop are expected to be _iterable_.
- Must have method named with `Symbol.iterator` symbol, which returns an object that provides a 2nd interface, _iterator_.
- The _iterator_ has the `next()` method, which return an object with a value property for next value and done property.

# Regex

- Declare new regex: `let newRegex1 = new RegExp("abc");` = `let newRegex2 = /abc/;`
- Escape forwardslashes when using 2nd notation from above; backslashes don't need to be escaped.
- `newRegex1.test("some string");` to test for regex in some string.
- `/\d+/.exec("one two 100");` returns object with match information or null
- `match.index` is the starting index of the matched regex.
- `/[0123456789]/.test("in 1992");` = `/[1-9]/.test("in 1992");` will look for any characters in the range in some string.
- `\d` any digit char.
- `\w` any alphanumeric char.
- `\s` any whitespace char (space, tab, newline, etc.).
- `\b` any word boundary, i.e. the start or end of a string or any point in the string that has a word char on one side and a nonword char on the other.
- `\D` any non-digit char.
- `\W` any non-alphanumeric char.
- `\S` any non-whitespace char.
- `.` any char except for newline.
- `/[^01]/` any char except the set.
- `/\d+/` 1 or more digits.
- `/\w*/` 0 or more alphanumeric chars.
- `/boo+(hoo+)+/;` use parentheses to enclose set of char as a single element and use special chars on set.
- `/neighbou?r/` optionally match u char, will still match if it isn't found (e.g.neighbor).
- `/lo{4}l/` o char should occur {4} times.
- `/lo{2-}l/` o char should occur min {2} times.
- `/lo{2-4}l/` o char should occur min {2} times and max {4} times.
- `/l(o+l+)+/i` i = case insensitive, i.e. will match all caps
- `/(pig|cow|chicken)/` indicates a choice between to three patterns.
- `string.replace("what to replace", "replace with");` will replace the first match, add `g` after regex to apply to entire string, which can be a function.
`$1 $2 $3` refers to parenthesized groups in the regex pattern; $& refers to the whole match.


