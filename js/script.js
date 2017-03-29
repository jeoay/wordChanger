var words = ['Web Developer', 'UX Designer', 'Sports Enthusiast', 'Gamer', 'Dog Lover'];

function randomWord() {
    var rand = words[Math.floor(Math.random() * words.length)];
    
    changeTheWord = document.getElementById('changer');
    changeTheWord.innerHTML = rand;
    
}

randomWord();