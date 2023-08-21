//Two strings are isomorphic if one-to-one mapping is possible for every character of the first string to every character of the second string.

function checkIsomorphic() {
  const str1 = document.getElementById("string1").value;
  const str2 = document.getElementById("string2").value;

  if (str1 === "") {
    document.getElementById("result").innerHTML =
      "<span class = 'error'> The string is empty. Please enter a string:</span>";
    return;
  }

  if (str2 === "") {
    document.getElementById("result").innerHTML =
      "<span class = 'error'> The string is empty. Please enter a string:</span>";
    return;
  }

  // Check if length of both strings is equal
  if (str1.length !== str2.length) {
    document.getElementById("result").innerHTML =
      "<span class='error'>Strings must be of the same length. </span>";
    return;
  }

  //initialize 2 empty hash maps
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1.charAt(i);
    const char2 = str2.charAt(i);

    if (map1.has(char1) && map1.get(char1) !== char2) {
      document.getElementById("result").innerHTML =
        "<span class='false'>False: strings not isomorphic. </span>";
      return;
    }
    if (map2.has(char2) && map2.get(char2) !== char1) {
      document.getElementById("result").innerHTML =
        "<span class='false'>False: strings not isomorphic. </span>";
      return;
    }
    map1.set(char1, char2);
    map2.set(char2, char1);
  }
  document.getElementById("result").innerHTML =
    "<span class='true'>True: strings are isomorphic. </span>";
}
