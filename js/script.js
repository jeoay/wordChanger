var words = ['Web Developer', 'UX Designer', 'Sports Enthusiast', 'Gamer', 'Dog Lover'];

function initializeWord(id) {
    var wordChanger = document.getElementById(id);
    
    function chooseWord() {
        var randWord = words[Math.floor(Math.random() * words.length)];
        wordChanger.innerHTML = randWord;
        
    }
    
    chooseWord(); //runs first to avoid delay
    var wordInterval = setInterval(chooseWord, 5000);
}

initializeWord('changer')