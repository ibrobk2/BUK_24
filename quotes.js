var btn = document.querySelector("#btn");
var h2 = document.querySelector("#q");

btn.addEventListener('click', function(){
    const quotes = [
        "There is no knowledge that is not power",
        "Likes attracts likes",
        "The hardway is the only way",
        "Like father, like son",
        "Honesty is the best Policy",
        "From zero to Hero",
        "Knowledge is Light",
        "Education is Power",
        "Determination leads to Success",
        "You can either have results or excuses but no both",
        "Dress good, feel good",
        "One with God is majority",
        "Alone but powerful"
    ];

    let randNum = Math.floor(Math.random()*quotes.length);

    // console.log(randNum);
    // console.log(quotes.length);

    h2.innerHTML = "<q><em>"+quotes[randNum]+"</em></q>";
});