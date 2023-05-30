(function(){
    let gameTile = document.querySelectorAll(".game-tile")
    let results = document.querySelector("#results")
    let gameBoardDiv = document.querySelector("#game-board")
    let gameBoard = []
    init()
    // INITIALISING GAMEBOARD TO BE AN ARRAY WITH ALL 9 DOMS
    function init(){
        for (i = 0; i < gameTile.length; i++){
            gameBoard.push("");
            gameTile[i].addEventListener("click", indexClicked)
        }
    }

    // DETERMINE INDEX OF DIV CLICKED
    function indexClicked(e){
        for (index = 0; index < gameTile.length; index++){
            if (gameTile[index] == e.target){
                updateGameBoard(index)
            }   
        }
    }

    // UPDATE GAMEBOARD ARRAY & RENDER ON HTML WITH PLAYER MARK ONLY IF IT IS EMPTY
    function updateGameBoard(index){
        if (gameBoard[index] == ""){
            let mark = playerMark();
            gameBoard.splice(index,1,mark);
            gameTile[index].textContent = mark;
            console.log(gameBoard);
            checkWinner();
        }
    }

    // UPDATE ARRAY PLAYERMARK ON HTML BASED ON ROUND
    let round = 0;
    function playerMark(){
        round++
        if (round%2 == 0){
            return "O";
        } else {
            return "X";
        }
    }
    
    // CHECK IF THERE IS A WINNER
    function checkWinner(){
        if (
            (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2]) && gameBoard[0] != "" ||
            (gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]) && gameBoard[3] != "" ||
            (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]) && gameBoard[6] != "" ||
            (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]) && gameBoard[0] != "" ||
            (gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]) && gameBoard[1] != "" ||
            (gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]) && gameBoard[2] != "" ||
            (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]) && gameBoard[0] != "" ||
            (gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]) && gameBoard[2] != ""
        ){
            function winner(round){
                if (round%2 == 0){
                    return "O"
                } else {
                    return "X"
                }
            }
            results.textContent = `Player "${winner(round)}" is the winner! Click Here To Restart` // TO SHOW WINNER IN H1

            // ADD RESTART ONCE WINNER IS DECIDED
            gameBoardDiv.style.pointerEvents = "none"
            results.addEventListener("click",reset)
        } else if (round == 9){
            results.textContent = `It was a Draw! Click Here To Restart` // TO SHOW ENDED IN DRAW

            // ADD RESTART ONCE WINNER IS DECIDED
            gameBoardDiv.style.pointerEvents = "none"
            results.addEventListener("click",reset)
        }
    }

    function reset(){
        round = 0;
        results.textContent = `Click on any tile to start!` 
        results.removeEventListener("click",reset);
        gameBoardDiv.style.pointerEvents = "auto";
        gameBoard = []
        for (i = 0; i < gameTile.length; i++){
            gameTile[i].textContent = gameBoard[i]
        }
        init()
    }
})()

