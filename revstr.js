var word = document.querySelector("#in").value;
function revString(word){
  

    rev = "";

    for (let i = word.length-1; i<=0; i--){
        rev = rev+word[i];
    }

    return console.log(rev);
}

document.querySelector("button").addEventListener('click', function(){
     revString(word);
})