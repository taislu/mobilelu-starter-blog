---
title: "JavaScript Regular Expressions"
date: "2019-12-03"
description: Regular expressions are patterns used to match character combinations in strings. 
category: JavaScript
---

[Source]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions )

**Regular expressions** are patterns used to match character combinations in strings. In JavaScript, regular expressions are also **objects**. These patterns are used with the exec and test methods of RegExp, and with the match, matchAll, replace, search, and split methods of String. 

**Creating a regular expression**

You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
```
var re = /ab+c/;
```
Regular expression literals provide compilation of the regular expression when the script is **loaded**. If the regular expression **remains constant**, using this can improve performance.

Or calling the constructor function of the RegExp object, as follows:
```
var re = new RegExp('ab+c');
```
Using the constructor function provides **runtime** compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be **changing**, or you don't know the pattern and are getting it from another source, such as user input.

**Using simple patterns**

Simple patterns are constructed of characters for which you want to find a **direct match**. For example, the pattern **/abc/** matches character combinations in strings only when exactly the characters 'abc' occur together and in that order. Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring 'abc'. There is no match in the string 'Grab crab' because while it contains the substring 'ab c', it does not contain the exact substring 'abc'.

**Using special characters**

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern. For example, to match a single 'a' followed by zero or more 'b's followed by 'c', you'd use the pattern **/ab*c/**: the * after 'b' means "0 or more occurrences of the preceding item." In the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.

**Special characters in regular expressions**

**\** : A backslash that precedes a non-special character indicates that the next character is special and is not to be interpreted literally. A backslash that precedes a special character indicates that the next character is not special and should be interpreted literally (ie : Escaping).

**^** : Matches **beginning** of input. For example, **/^A/** does not match the 'A' in "an A", but does match the 'A' in "An E".

**$** : Matches **end** of input. For example, /t$/ does not match the 't' in "eater", but does match it in "eat".

\* : Matches the preceding expression **0 or more times**. For example, /bo*/ matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".
  
\+ : Matches the preceding expression **1 or more times**. For example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy".

**?** : Matches the preceding expression 0 or 1 time. For example, /e?le?/ matches the 'el' in "angel" and the 'le' in "angle" and also the 'l' in "oslo". If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the fewest possible characters), as opposed to the default, which is greedy (matching as many characters as possible). For example, applying **/\d+/** to "123abc" matches "123". But applying **/\d+?/** to that same string matches only the "1".

**.** : (The **decimal point**) matches any **single character** except the newline character, by default. For example, /.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.

[xyz] : This pattern type matches **any** one of the characters in the brackets. The pattern [a-d], which performs the same match as [abcd], matches the 'b' in "brisket" and the 'c' in "city". The patterns /[a-z.]+/ and /[\w.]+/ match the entire string "test.i.ng".

\[^xyz] : Matches anything that is **not** enclosed in the brackets. For example, \[^abc] is the same as \[^a-c]. They initially match 'r' in "brisket" and 'h' in "chop."

\b : Matches a **word boundary**. Examples using the input string "moon": /\bm/ matches, because the \b is at the beginning of the string

\d : Matches a **digit character**. Equivalent to [0-9]. For example, /\d/ or /[0-9]/ matches '2' in "B2 is the suite number."

\w : Matches any **alphanumeric character** including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches 'a' in "apple," '5' in "$5.28," and '3' in "3D."

**Unpacking values from a regular expression match**

When the regular expression exec() method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression. Destructuring assignment allows you to unpack the parts out of this array easily, ignoring the full match if it is not needed.

```
function parseProtocol(url) { 
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); 
  // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
j
```
