// my solution
function rot13(str) {
  let arr = str.split('');
  let words = [];

  for(let each in arr){
    if (arr[each].charCodeAt() < 65 || arr[each].charCodeAt() > 90){
      words.push(arr[each]);
    } else if(arr[each].charCodeAt() < 78) {
      words.push(String.fromCharCode(arr[each].charCodeAt()+13))
    } else if (arr[each].charCodeAt() >= 78) {
      words.push(String.fromCharCode(arr[each].charCodeAt()-13));
    } 
}

return words.join('');
}

rot13("SERR PBQR-PNZC!");
