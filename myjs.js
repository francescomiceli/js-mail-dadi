console.log('JS OK!!!')

// random number da 1 a 6 
const playerScore = Math.floor(Math.random() * 6) + 1;
console.log('Giocatore Vince', playerScore);


const computerScore = Math.floor(Math.random() * 6) + 1;
console.log('Computer vince', computerScore);



if (playerScore > computerScore) {                
    
    document.getElementById('container').innerHTML = 'Giocatore vince!';
} else if (playerScore < computerScore) {        
    
    document.getElementById('container').innerHTML = 'Computer Vince!';
} else {
    
    document.getElementById('container').innerHTML = 'Pareggio!';
}