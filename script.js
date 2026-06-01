function printerError(s) {
    // your code
  let strLength = s.length;
  let foundError = `0/${strLength}`;
  let count = 0;
  for(let char of s){
    if(char<"a" || char>"m"){
        count++;
        foundError = `${count}/${strLength}`
    }
  }
  return foundError;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"));