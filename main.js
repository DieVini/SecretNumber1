alert('Welcome to the secret number game')
let limit = 100;
let secret_number = parseInt(Math.random() *100+1); //gerar numeros aleatorios de 1 a 100
let guess = 0;
let trys = 1;

while(guess != secret_number){
    guess = prompt(`Digite um numero de 1 a ${limit}`);
    if(guess <= 100 & guess > 0){
        if (secret_number == guess){
            let word_attempts = trys > 1 ? 'attempts': 'attempt';
            alert(`you guessed right, congratulations!!!, you win in ${trys} ${word_attempts}`);
        }
        else{ //dica do numero secreto
            if(guess < secret_number){
            alert(`Secret number is higher, TRY AGAIN!!! Try: ${trys}`);
            }
            else{
            alert(`Secret number is lower, TRY AGAIN!!! Try: ${trys}`);
            }
            trys++; //aumenta a contagem de tentativas
        }
    }
    else{
        alert("Invalid number, TRY AGAIN!!!")
    }
}