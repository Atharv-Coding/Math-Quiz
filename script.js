function login() {
    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;

    localStorage.setItem("Player1: ", player1);
    localStorage.setItem("Player2: ", player2);

    window.location = "index-2.html";
}