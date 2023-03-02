function dicePlay(){
    var RandomNumber1 =Math.floor(Math.random()*6)+1;
    var RandomNumber2 =Math.floor(Math.random()*6)+1;
    var img1 = "images/dice"+RandomNumber1.toString()+".png"
    var img2 = "images/dice"+RandomNumber2.toString()+".png"
    var player1 = document.querySelector(".img1").setAttribute("src",img1);
    var player2 = document.querySelector(".img2").setAttribute("src",img2);

    if(RandomNumber1 > RandomNumber2){
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    }
    else if(RandomNumber1 < RandomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}
