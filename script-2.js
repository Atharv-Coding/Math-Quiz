let player1Name = localStorage.getItem("Player1: ");
let player2Name = localStorage.getItem("Player2: ");

let player1Score = 0;
let player2Score = 0;

document.getElementById("player1name").innerHTML = player1Name + ": ";
document.getElementById("player2name").innerHTML = player2Name + ": ";

document.getElementById("ply1score").innerHTML = player1Score;
document.getElementById("ply2score").innerHTML = player2Score;

document.getElementById("playerQue").innerHTML = "Question Turn: " + player1Name;
document.getElementById("playerAns").innerHTML = "Answer Turn: " + player2Name;

function send() {
    var get_number = document.getElementById("numberInput").value;
    var get_number2 = document.getElementById("numberInput2").value;
    // var number = get_number.toLowerCase();

    // var c1 = number.charAt(1);

    // var midValue = Math.floor(number.length / 2);
    // var c2 = number.charAt(midValue);

    // var lenghtMinus1 = number.length - 1;
    // var c3 = number.charAt(lenghtMinus1); 

    // var removec1 = number.replace(c1, "_");
    // var removec2 = removec1.replace(c2, "_");
    // var removec3 = removec2.replace(c3, "_");

    var question = `<h4 id="numberDisplay">Q. ${get_number + " x " + get_number2}</h4>`;
    var answer = `<br>Answer: <input id="inputAnswer" type="text>"`;
    var button = `<br><br><br><button class="btn btn-info" id="checkBtn" onclick="check()">Check</button>`;

    var row = question + answer + button;
    document.getElementById('output').innerHTML = row;
    document.getElementById("numberInput").innerHTML = "";
    document.getElementById("numberInput2").innerHTML = "";
}
var playerQuestion = "player1";
var playerAnswer = "player2";
function check() {
    var get_number = document.getElementById("numberInput").value;
    var get_number2 = document.getElementById("numberInput2").value;
    var get_answer = document.getElementById("inputAnswer").value;
    if( get_number * get_number2 == get_answer ) {
        if (playerAnswer == "player1"){
            player1Score = player1Score + 1
            document.getElementById("ply1score").innerHTML = player1Score;
        } 
        else{
            player2Score = player2Score + 1;
            document.getElementById("ply2score").innerHTML = player2Score;
        }
    }
    if (playerQuestion == "player1") {
      playerQuestion = "player2";
      document.getElementById("playerQue").innerHTML =
        "Question Turn: " + player2Name;
    } else {
      playerQuestion = "player1";
      document.getElementById("playerQue").innerHTML =
        "Question Turn: " + player1Name;
    }    

    if (playerAnswer == "player1") {
      playerAnswer = "player2";
      document.getElementById("playerAns").innerHTML =
        "Answer Turn: " + player2Name;
    } else {
      playerAnswer = "player1";
      document.getElementById("playerAns").innerHTML =
        "Answer Turn: " + player1Name;
    }
    document.getElementById("output").innerHTML = "";
}