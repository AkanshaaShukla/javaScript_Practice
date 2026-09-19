const name = "Akansha"
const subject = "5"

console.log(name+subject+"examination")     // (old method not encouraged)

console.log(`Hello my name is ${name} and i have Examination of ${subject} subjects`)


const GameName = new String ("Akansha Shukla - Anjali - tanushree ")
console.log(GameName)  //[String: 'Akansha Shukla - Anjali - tanushree ']

console.log(GameName[4]) //4

console.log(GameName.__proto__);

console.log(GameName.length)  //36

console.log(GameName.at (5 , 3))


/*
console.log(GameName )
console.log(GameName )
console.log(GameName )
console.log(GameName )
console.log(GameName )
console.log(GameName )
console.log(GameName )
console.log(GameName )

*/

// ============================================================
//              JAVASCRIPT STRINGS - COMPLETE NOTES
// ============================================================

// A String is a sequence of characters/text.
// We can create a string using "", '', or `` (backticks).

let str = "   JavaScript is Amazing   ";


// ============================================================
// 1. length
// ============================================================

// .length tells us the total number of characters.
// Spaces are also counted.

console.log(str.length);
// OUTPUT: 27


// ============================================================
// 2. at()
// ============================================================

// .at(index) gives the character at a particular position.
// JavaScript indexing starts from 0.

console.log(str.at(3));
// OUTPUT: J

// Negative index starts counting from the end.

console.log(str.at(-4));
// OUTPUT: n


// ============================================================
// 3. [] - Accessing characters
// ============================================================

// We can also access characters using [index].

console.log(str[3]);
// OUTPUT: J

console.log(str[4]);
// OUTPUT: a


// ============================================================
// 4. charAt()
// ============================================================

// .charAt(index) returns the character at that index.

console.log(str.charAt(3));
// OUTPUT: J


// ============================================================
// 5. charCodeAt()
// ============================================================

// .charCodeAt(index) returns the Unicode/character code.

console.log("A".charCodeAt(0));
// OUTPUT: 65

console.log("a".charCodeAt(0));
// OUTPUT: 97


// ============================================================
// 6. toUpperCase()
// ============================================================

// Converts the complete string into CAPITAL LETTERS.

console.log(str.toUpperCase());
// OUTPUT: "   JAVASCRIPT IS AMAZING   "


// ============================================================
// 7. toLowerCase()
// ============================================================

// Converts the complete string into lowercase letters.

console.log(str.toLowerCase());
// OUTPUT: "   javascript is amazing   "


// ============================================================
// 8. trim()
// ============================================================

// Removes extra spaces from BOTH the beginning and the end.

console.log(str.trim());
// OUTPUT: "JavaScript is Amazing"


// ============================================================
// 9. trimStart()
// ============================================================

// Removes spaces only from the START.

console.log(str.trimStart());
// OUTPUT: "JavaScript is Amazing   "


// ============================================================
// 10. trimEnd()
// ============================================================

// Removes spaces only from the END.

console.log(str.trimEnd());
// OUTPUT: "   JavaScript is Amazing"


// ============================================================
// 11. includes()
// ============================================================

// Checks whether a particular word/character exists.
// Returns true or false.

console.log(str.includes("JavaScript"));
// OUTPUT: true

console.log(str.includes("Python"));
// OUTPUT: false


// ============================================================
// 12. startsWith()
// ============================================================

// Checks whether the string starts with a particular text.

console.log(str.trim().startsWith("JavaScript"));
// OUTPUT: true

console.log(str.trim().startsWith("Python"));
// OUTPUT: false


// ============================================================
// 13. endsWith()
// ============================================================

// Checks whether the string ends with a particular text.

console.log(str.trim().endsWith("Amazing"));
// OUTPUT: true

console.log(str.trim().endsWith("JavaScript"));
// OUTPUT: false


// ============================================================
// 14. indexOf()
// ============================================================

// Finds the FIRST position/index of a word or character.
// Returns -1 if it is not found.

console.log("banana".indexOf("a"));
// OUTPUT: 1

console.log("banana".indexOf("z"));
// OUTPUT: -1


// ============================================================
// 15. lastIndexOf()
// ============================================================

// Finds the LAST occurrence of a character/word.

console.log("banana".lastIndexOf("a"));
// OUTPUT: 5


// ============================================================
// 16. slice()
// ============================================================

// Extracts a part of a string.
//
// Syntax:
// string.slice(start, end)
//
// IMPORTANT:
// The ending index is NOT included.

let Codename = "JavaScript";

console.log(Codename.slice(0, 4));
// OUTPUT: "Java"

console.log(Codename.slice(4, 10));
// OUTPUT: "Script"


// Negative values can also be used.

console.log(Codename.slice(-6));
// OUTPUT: "Script"


// ============================================================
// 17. substring()
// ============================================================

// Also extracts part of a string.
//
// Syntax:
// string.substring(start, end)
//
// Ending index is NOT included.

console.log(Codename.substring(0, 4));
// OUTPUT: "Java"

console.log(Codename.substring(4, 10));
// OUTPUT: "Script"


// ============================================================
// 18. split()
// ============================================================

// Converts a STRING into an ARRAY.
//
// Example:

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));
// OUTPUT: [ 'Apple', 'Banana', 'Mango' ]


// Splitting using space:

let sentence = "I love JavaScript";

console.log(sentence.split(" "));
// OUTPUT: [ 'I', 'love', 'JavaScript' ]


// Splitting every character:

console.log("HELLO".split(""));
// OUTPUT: [ 'H', 'E', 'L', 'L', 'O' ]


// ============================================================
// 19. replace()
// ============================================================

// Replaces the FIRST matching text.

let text = "I love Java. Java is powerful.";

console.log(text.replace("Java", "JavaScript"));
// OUTPUT: "I love JavaScript. Java is powerful."


// ============================================================
// 20. replaceAll()
// ============================================================

// Replaces ALL matching text.

console.log(text.replaceAll("Java", "JavaScript"));
// OUTPUT: "I love JavaScript. JavaScript is powerful."


// ============================================================
// 21. concat()
// ============================================================

// Joins two or more strings together.

let firstName = "Akansha";
let lastName = "Shukla";

console.log(firstName.concat(" ", lastName));
// OUTPUT: "Akansha Shkukla"


// Modern JavaScript usually uses template literals instead:
// `${firstName} ${lastName}`


// ============================================================
// 22. repeat()
// ============================================================

// Repeats a string a specified number of times.

console.log("Hi ".repeat(3));
// OUTPUT: "Hi Hi Hi "


// ============================================================
// 23. padStart()
// ============================================================

// Adds characters at the BEGINNING
// until the string reaches the given length.

let number = "5";

console.log(number.padStart(3, "0"));
// OUTPUT: "005"


// Another example:

console.log("42".padStart(5, "0"));
// OUTPUT: "00042"


// ============================================================
// 24. padEnd()
// ============================================================

// Adds characters at the END
// until the string reaches the given length.

console.log(number.padEnd(3, "0"));
// OUTPUT: "500"


// ============================================================
// 25. search()
// ============================================================

// Searches for a word/pattern and returns its index.
// Returns -1 if not found.

let sentence2 = "I love JavaScript";

console.log(sentence2.search("JavaScript"));
// OUTPUT: 7

console.log(sentence2.search("Python"));
// OUTPUT: -1


// ============================================================
// 26. match()
// ============================================================

// Used to find matching text/patterns.
// It is commonly used with Regular Expressions (Regex).

let data = "My marks are 85";

console.log(data.match(/\d+/));
// OUTPUT: [ '85', index: 13, ... ]

// \d+ means: find one or more digits.


// ============================================================
// 27. matchAll()
// ============================================================

// Finds ALL matches of a pattern.
// It returns an iterator.

let animals = "cat dog cat bird cat";

let matches = animals.matchAll(/cat/g);

console.log([...matches]);
// OUTPUT: Array containing all 3 "cat" matches


// ============================================================
// 28. localeCompare()
// ============================================================

// Compares two strings according to sorting rules.
//
// It returns:
// negative number → first string comes before second
// 0               → both are equal
// positive number → first string comes after second

console.log("apple".localeCompare("banana"));
// OUTPUT: negative number (usually -1)

// NOTE:
// Don't depend on the exact number.
// Understand whether it is negative, zero, or positive.


// ============================================================
// 29. toString()
// ============================================================

// Converts a value into a STRING.

let marks = 95;

console.log(marks.toString());
// OUTPUT: "95"

console.log(typeof marks.toString());
// OUTPUT: "string"


// ============================================================
// 30. normalize()
// ============================================================

// Used for Unicode text normalization.
// It helps make different Unicode representations
// of the same-looking text comparable.

let specialText = "é";

console.log(specialText.normalize());
// OUTPUT: "é"

// NOTE:
// This is an advanced method.
// You don't need to use it often as a beginner.


// ============================================================
// 31. isWellFormed()
// ============================================================

// Checks whether a string contains well-formed Unicode data.
// Returns true or false.

let normalText = "Hello";

console.log(normalText.isWellFormed());
// OUTPUT: true


// ============================================================
// 32. toWellFormed()
// ============================================================

// Converts a string into a well-formed Unicode string.
// This is an advanced Unicode feature.

console.log(normalText.toWellFormed());
// OUTPUT: "Hello"


// ============================================================
// 33. Symbol.iterator
// ============================================================

// Strings are ITERABLE.
// This means we can go through every character one by one.

let word = "HELLO";

for (let character of word) {
    console.log(character);
}

// OUTPUT:
// H
// E
// L
// L
// O


// ============================================================
// 34. toLocaleUpperCase()
// ============================================================

// Similar to toUpperCase().
// It can take language/locale rules into account.

console.log("hello".toLocaleUpperCase());
// OUTPUT: "HELLO"


// ============================================================
// 35. toLocaleLowerCase()
// ============================================================

// Similar to toLowerCase().

console.log("HELLO".toLocaleLowerCase());
// OUTPUT: "hello"


// ============================================================
// 36. valueOf()
// ============================================================

// Returns the primitive value of a String object.
// Usually you don't need to call this manually.

let word2 = "Hello";

console.log(word2.valueOf());
// OUTPUT: "Hello"


// ============================================================
// 37. constructor
// ============================================================

// Tells us that the string is created using the
// built-in String constructor.

let x = "Hello";

console.log(x.constructor);
// OUTPUT: [Function: String]


// ============================================================
//              IMPORTANT STRING CONCEPT
// ============================================================

// Strings are IMMUTABLE.
//
// This means string methods do NOT normally change
// the original string.
//
// Example:

let original = "hello";

original.toUpperCase();

console.log(original);
// OUTPUT: "hello"

// The original did NOT change.


// We need to store the result:

original = original.toUpperCase();

console.log(original);
// OUTPUT: "HELLO"


// ============================================================
//              STRING METHOD CHEAT SHEET
// ============================================================

// length
// → Counts characters

// at()
// → Gets character at index

// charAt()
// → Gets character at index

// charCodeAt()
// → Gets character's Unicode value

// toUpperCase()
// → Converts to uppercase

// toLowerCase()
// → Converts to lowercase

// includes()
// → Checks whether text exists

// startsWith()
// → Checks beginning

// endsWith()
// → Checks ending

// indexOf()
// → Finds FIRST occurrence

// lastIndexOf()
// → Finds LAST occurrence

// slice()
// → Extracts part of string

// substring()
// → Extracts part of string

// split()
// → Converts STRING → ARRAY

// replace()
// → Replaces FIRST matching text

// replaceAll()
// → Replaces ALL matching text

// trim()
// → Removes spaces from both ends

// trimStart()
// → Removes spaces from beginning

// trimEnd()
// → Removes spaces from end

// concat()
// → Joins strings

// repeat()
// → Repeats string

// padStart()
// → Adds characters at beginning

// padEnd()
// → Adds characters at end

// search()
// → Searches for text/pattern

// match()
// → Finds matching pattern

// matchAll()
// → Finds all matching patterns

// localeCompare()
// → Compares strings for sorting

// toString()
// → Converts value to string


// ============================================================
//                MOST IMPORTANT TO MEMORIZE
// ============================================================

// For exams + normal coding, FIRST master these:

// 1. length
// 2. at()
// 3. toUpperCase()
// 4. toLowerCase()
// 5. includes()
// 6. indexOf()
// 7. slice()
// 8. split()
// 9. replace()
// 10. replaceAll()
// 11. trim()
// 12. startsWith()
// 13. endsWith()
