// ### Instructions

// * Create a website that accomplishes the following:

 // * Create an array of your favorite bands.

 // * With a prompt, ask the user's favorite band.

 // * If it's one of your favorites, alert: "YEAH I LOVE THEM!"

 // * If it's not, alert: "Nah. They're pretty lame."

 // * **HINT:**  You will need to research how to use `.indexOf()`.

 //* **HINT:** You will need to research how to use `.toLowerCase()`

 // the indexOf() method returns the index within the calling String object of 
 // the first occurence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

 // str.indexOf(searchValue[, fromIndex])
 // searchValue is a string representing the value to search for
 // fromIndex is an integer representing the index at which to start the search; the default value is 0. 
 // If fromIndex <= 0 the entire string is searched 
 // If fromIndex >= str.length , the string is not searched and -1 is returned. 
 // If searchValue is an empty string, the behaviour is as follows --
 // if fromIndex < str.length, fromIndex is returned; if fromIndex >= str.length, str.length is returned.

 // Characters in a string are indexed from left to right. The index of the first cahracter is 0, and the index
 // of the last character of a string called stringName is stringName.length - 1.
 // ie. 'Blue Whale' .indexOf('Blue'); returns 0
 // ie. 'Blue Whale' .indexOf ('Blute'); returns -1

 //  toLowerCase() method returns the calling string value converted to lowercase
 // Syntax: str.toLowerCase()
 // Return value: a new string representing the calling string converted into lower case
 // toLowerCase() does not affect the value of the string str itself
 // ie. console.log('ALPHABET'.toLowerCase ()); // 'alphabet'

