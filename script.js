
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const nextButton = document.getElementById("new-quote-button");
const link = document.getElementsByTagName("a")[0];
const loader = document.getElementsByClassName("loader")[0];


function find(){
    fetch('https://talaikis.com/api/quotes/random/').then((data)=> data.json())
    .then(quoteResult => {
        console.log(quoteResult);
        loader.style.display = "none";
        quoteText.innerText = `"${quoteResult.quote}"`;
        quoteAuthor.innerText = `-${quoteResult.author}`;
        link.setAttribute("href", `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quoteResult.quote} -${quoteResult.author}`)
    })
}

const reqSettings = {
    method: "POST",
    headers: {
        "authorization": "oauth_consumer_key=sd1UYyWnvocYcTxABLKTthpqY&oauth_token=772798357513310209-GuFp9XPlhkzW3yUU47PFWVwS21ANkhV&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1506646256&oauth_nonce=E6yR14cMKvm&oauth_version=1.0&oauth_signature=8nhgWrEo4FFEzDyxq3OlsPNI8Do="
    }
}

nextButton.addEventListener("click", function(){
    loader.style.display = "";
    quoteText.innerText = "";
    quoteAuthor.innerText = "";
    find();
});

window.onload = find()
