//Two strings are isomorphic if one-to-one mapping is possible for every character of the first string to every character of the second string.

function checkIsomorphic() {
  const str1 = document.getElementById("string1").value;
  const str2 = document.getElementById("string2").value;

  if (str1.length !== str2.length) {
    document.getElementById("result").innerHTML =
      "Strings must be of the same length.";
    return;
  }
  const map1 =new Map()
  const map2 = new Map()

  for (let i = 0; i< str1.length; i++) {
    const char1 = str1.charAt(i)
    const char2 = str2.charAt(i)
  }
}

function isIsomorphic(strs, strt) {
  (x = strs.length()), (y = strt.length());
  if (x !== y) {
    print("");
    return false;
  }
  Map < Char, char > map;
  new HashMap();
  Set < char > set;
  new HashSet();
  for (let i = 0; i < x; i++);
  (s1 = strs.charAt(i)), (s2 = strt.charAt(i));
  if (map.containskey(s1)) {
    if (map.get(s1) !== s2) return false;
  } else {
    if (set.contains(s2)) return false;
    map.put(s1, s2);
    set.add(s2);
  }
  return true;
}
strs = "egg";
strt = "add";
console.log(isIsomorphic(strs, strt));
