//#region Variables
//The soft for the the dice, paths, and tags
var path = "Images/";
var randNumArray = [];
var diceArray = ["one", "two", "three", "four", "five", "six"];
var tag = ".png";
var boardMovement = 0;
var boardMovement1 = 0;
var toggle = 0;

//global variable for the grade check system
var firstClass = 0;
var secondClass = 0;
var thirdClass = 0;

var firstClass1 = 0;
var secondClass1 = 0;
var thirdClass1 = 0;

//for the chance time
var message = [
  "You're Doing Great",
  "UNO MAS",
  "Don't forget the baby formula!",
  "10 more push-ups, NOW",
  "Are Hot Dogs, sandwiches?",
  "You're doing an amazing job :)",
  "You are loved, and appreciated",
  "You know, a few years ago the world turned to chaos\nbut here you are coding like a mad man",
  "Hard Work Pays Off",
  "Smile it's good for you",
];
//global location for a piece from my information board which will change
var checkYourGrades = document.getElementById("eventGrade");
//#endregion
//#region ------------------------DiceRolling------------------------
//For loop to be added to create the dice.
for (var i = 0; i < diceArray.length; i++) {
  //All the values into the array
  var pDice = diceArray[i];
  //
  // var createElement = document.createElement("")
}
//putting the dice tag into a JS variable for later use
var dice = document.getElementById("diceImg");
//anon function for the randon numbers
dice.addEventListener("click", function () {
  //This is for the two dice. One is always rolling, another is connected to a random number generator that is rolled when the dice are clicked.
  document.getElementById("dice2").style.zIndex = "1";
  document.getElementById("dice").style.zIndex = "0";
  var randomNum = Math.floor(Math.random() * 5);
  //Like line 18 says, this changes the non rolling dice's img source to the random num gen
  document.getElementById("diceImg").src = path + diceArray[randomNum] + tag;
});
//This is the function that makes the first dice rolling forever
function DiceRolling() {
  let random = Math.floor(Math.random() * 5);
  var diceArray = ["one", "two", "three", "four", "five", "six"];
  let image = document.getElementById("diceImg");
  image.src = path + diceArray[random] + tag;
}
//The rate at which the dice is changing it's face/Rolling
var myInterval = setInterval(DiceRolling, 100);
//#endregion
//#region ------------------------Piece Moving-----------------------
//Whenever the first dice is clicked it switches the dice and shows the frozen second dice
document.getElementById("dice2").addEventListener("click", function () {
  if (toggle == 0) {
    toggle = 1;
    //#region PS4PieceMoves
    var randomNum = Math.floor(Math.random() * 5);
    document.getElementById("diceImg2").src = path + diceArray[randomNum] + tag;
    //Whatever the player rolled
    var playerRolled = randomNum + 1;
    var howFarMoved = playerRolled * 100;
    MovePlayers(playerRolled, howFarMoved);
    document.getElementById("dice").style.zIndex = "0";
    document.getElementById("dice2").style.zIndex = "1";

    //This variable is what is used to calculate how many spaces the player will move

    function MovePlayers(howFarRolled, playerMoved) {
      //More  softcode for player 1 and Player 2
      var Player1 = document.getElementById("Player1");

      //Far Right is 500px
      var farRight = 500;
      //Far Down is 500px
      var farDown = 500;
      //Far Up is at 0px
      var farUp = 0;
      //Far Left is at 0px
      var farLeft = -20;
      //hard code
      var moveLeft = 1500;
      //hard code
      var moveUp = 2000;

      //depending on if the value is positive or negative, move left or right
      var moveLeftRight = 0;

      //Ditto line 67
      var moveUpDown = 0;

      //the calculations variable
      //THIS IS WHAT MOVES THE PIECES
      howFarRolled = boardMovement += playerMoved;

      //MUST stop at go.
      if (boardMovement >= 2000) {
        boardMovement = 0;
      }
      BoardEventsOne(boardMovement);

      //if our dice roll goes over to the corner, we take what's left of the roll and put it into the style that moves our piece down
      if (howFarRolled > farRight && howFarRolled <= 1000) {
        //how much we will move down
        moveUpDown = howFarRolled - farRight;
        //keeping the piece stuck at the right side
        howFarRolled = farRight;
      } else if (howFarRolled >= 1000 && howFarRolled < 1500) {
        howFarRolled = moveLeft - howFarRolled;
        moveLeftRight = howFarRolled;
        moveUpDown = farDown;
      } else if (howFarRolled >= 1500 && howFarRolled < 2000) {
        howFarRolled = moveUp - howFarRolled;
        moveUpDown = howFarRolled;
        howFarRolled = farLeft;
      } else if (howFarRolled >= 2000) {
        howFarRolled = farUp;
      }
      Player1.style.transform = `translateX(${howFarRolled}px) translateY(${moveUpDown}px)`;
      DisplayProgress(toggle, playerRolled);
      //#endregion
    }
  } else {
    //#region XboxPieceMoves
    toggle = 0;
    var randomNum1 = Math.floor(Math.random() * 5);
    document.getElementById("diceImg2").src =
      path + diceArray[randomNum1] + tag;
    //Whatever the player rolled
    var playerRolled1 = randomNum1 + 1;
    var howFarMoved1 = playerRolled1 * 100;

    document.getElementById("dice").style.zIndex = "0";
    document.getElementById("dice2").style.zIndex = "1";
    MovePlayers(playerRolled1, howFarMoved1);
    //This variable is what is used to calculate how many spaces the player will move

    function MovePlayers(howFarRolled1, playerMoved1) {
      //More  softcode for player 1 and Player 2
      var Player2 = document.getElementById("Player2");

      //Far Right is 500px
      var farRight = 500;
      //Far Down is 500px
      var farDown = 500;
      //Far Up is at 0px
      var farUp = 0;
      //Far Left is at 0px
      var farLeft = -20;
      //hard code
      var moveLeft = 1500;
      //hard code
      var moveUp = 2000;

      //depending on if the value is positive or negative, move left or right
      var moveLeftRight = 0;

      //Ditto line 67
      var moveUpDown = 0;

      //the calculations variable
      //THIS IS WHAT MOVES THE PIECES
      howFarRolled1 = boardMovement1 += playerMoved1;

      if (boardMovement1 >= 2000) {
        boardMovement1 = 0;
      }
      BoardEventsTwo(boardMovement1);

      //if our dice roll goes over to the corner, we take what's left of the roll and put it into the style that moves our piece down
      if (howFarRolled1 > farRight && howFarRolled1 <= 1000) {
        //how much we will move down
        moveUpDown = howFarRolled1 - farRight;
        //keeping the piece stuck at the right side
        howFarRolled1 = farRight;
      } else if (howFarRolled1 >= 1000 && howFarRolled1 < 1500) {
        howFarRolled1 = moveLeft - howFarRolled1;
        moveLeftRight = howFarRolled1;
        moveUpDown = farDown;
      } else if (howFarRolled1 >= 1500 && howFarRolled1 < 2000) {
        howFarRolled1 = moveUp - howFarRolled1;
        moveUpDown = howFarRolled1;
        howFarRolled1 = farLeft;
      } else if (howFarRolled1 >= 2000) {
        howFarRolled1 = farUp;
      }
      Player2.style.transform = `translateX(${howFarRolled1}px) translateY(${moveUpDown}px)`;

      DisplayProgress(toggle, playerRolled1);
    }
  }
  //#endregion
});
//#endregion

//#region -----------------THE DISPLAY PROGRESS FUNCTION------------------

//This was a big one. Something we all learned in class today 03-08-22
///First we have the foundation
///The function name and it's param.
//it's being sent the toggle variable to know who to display for and how much they rolled each time the dice is rolled
function DisplayProgress(whichPlayer, numRolled) {
  //A giant if function to ///toggle/// between the two
  if (whichPlayer == 0) {
    //force it to switch to the other player after this one or it'll break :c
    whichPlayer = 1;
    //Making a class for efficiency
    class updateTurn {
      //constructor to make everything come together like a puzzle
      constructor(playerName, whosTurn, numRolled) {
        this.playerName = playerName;
        this.whosTurn = whosTurn;
        this.numRolled = numRolled;
      }
      //the part that does the real work, grab every variable and put it together in the display message div
      DisplayMessage() {
        //SoftCode
        var DisplayMessage = document.getElementById("DisplayMessage");
        //Con Cat Nate
        DisplayMessage.innerHTML = `It's ${this.playerName}'s ${this.whosTurn}!\nThey rolled a ${this.numRolled}`;
      }
    }
    //Two bits of HardCode and one SoftCode
    var player1Progess = new updateTurn("Player2", "turn", numRolled);
    //Put it all together
    player1Progess.DisplayMessage();
    //below this line is the exact same thing execept it's for player2 to save time and sanity, I'm not going to comment those :)
  } else if (whichPlayer == 1) {
    whichPlayer = 0;
    class updateTurn {
      constructor(playerName, whosTurn, numRolled) {
        this.playerName = playerName;
        this.whosTurn = whosTurn;
        this.numRolled = numRolled;
      }
      DisplayMessage() {
        var DisplayMessage = document.getElementById("DisplayMessage");
        DisplayMessage.innerHTML = `It's ${this.playerName}'s ${this.whosTurn}!\nThey rolled a ${this.numRolled}`;
      }
    }
    var player1Progess = new updateTurn("Player1", "turn", numRolled);
    player1Progess.DisplayMessage();
  }
}
//#endregion

//#region ------------------Custom Board Spaces---------------------
//This is nearly the final step in this helluva of a midterm/monoply game
//This function's purpose is to take whatever spaces my pieces are on send them through several different if statments and conditions
//update scoreboards, move player's back, possibly win the player the game.\

function BoardEventsOne(Player1Position) {
  //Random num gen for chance time
  var chanceArray = Math.floor(Math.random() * 9);
  var psFourChance = message[chanceArray];
  //If the player is in any of the positions lined out in the conditions
  //Then the check grade function is called and sent their positions
  //It will return with their positions
  if (Player1Position == 200 || Player1Position == 1300) {
    GradeCheckPlayer1(Player1Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER1\nPRESS THE BUTTON! (CIS 130)";
  } else if (Player1Position == 300 || Player1Position == 1800) {
    GradeCheckPlayer1(Player1Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER1\nPRESS THE BUTTON! (CIS 150)";
  } else if (Player1Position == 600 || Player1Position == 1500) {
    GradeCheckPlayer1(Player1Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER1\nPRESS THE BUTTON! (CIS 170)";
  } else if (Player1Position == 1000) {
    var chanceCard = document.getElementById("Message");
    chanceCard.innerHTML = psFourChance;
  } //Capstone
  else if (Player1Position == 0) {
    GradeCheckPlayer1(Player1Position);
  }
}

function BoardEventsTwo(Player2Position) {
  var chanceArray = Math.floor(Math.random() * 9);
  var xBoxChance = message[chanceArray];
  if (Player2Position == 200 || Player2Position == 1300) {
    GradeCheckPlayer2(Player2Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER2\nPRESS THE BUTTON! (CIS 130)";
  } else if (Player2Position == 300 || Player2Position == 1800) {
    GradeCheckPlayer2(Player2Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER2\nPRESS THE BUTTON! (CIS 150)";
  } else if (Player2Position == 600 || Player2Position == 1500) {
    GradeCheckPlayer2(Player2Position);
    checkYourGrades.innerHTML =
      "CHECK YOUR FINAL GRADE, PLAYER2\nPRESS THE BUTTON! (CIS 170)";
  } else if (Player2Position == 1000) {
    var chanceCard = document.getElementById("Message");
    chanceCard.innerHTML = xBoxChance;
  } else if (Player2Position == 0) {
    GradeCheckPlayer2(Player2Position);
  }
}
//#endregion

//#region ----------------------------Grade Check----------------------
//GradeCheck function for the 3 and 5 chance of passing the class
//There's two seperate functions, I tried my absolute best to make it happen in one big function
//The logic was there but at times when I would check the grade it say that 2-3 classes were completed at one time
function GradeCheckPlayer1(ps4Controller) {
  //The values for the function to know if the players have already completed the course or not

  //The simple random num gen, generating 5 numbers
  var randomGrade = Math.floor(Math.random() * 5);
  //The array that will be used to determine grade level, duh
  var grades = ["A", "B", "C", "D", "F"];
  //The big one, first a SoftCode location, then an Anon Function attached to the button that will..
  //Send the information through tons of checks to see what needs to be displayed
  var theChecker = document.getElementById("GradeCheck");
  theChecker.addEventListener("click", function () {
    //hardcoded locations used as soft code to determine if the player has a good grade=
    var doneThirdy = document.getElementById("oneThirdyOne");

    var doneFifty = document.getElementById("oneFiftyOne");

    var doneSeventy = document.getElementById("oneSeventyOne");
    //SoftCode location
    var player1ClassGet = document.getElementById("hidden");
    //SoftCode location for the grade that'll be randomly picked then displayed
    gradeChange = document.getElementById("gradeChange");
    gradeChange.innerHTML = grades[randomGrade];
    //Once again one big giant if/ esle if to distinguish between the different classes
    //There's many occurances with the "if(randomGrade < 3)"
    //The player MUST get randomGrade < 3 or they won't pass the class
    if ((firstClass == 0 && ps4Controller == 200) || ps4Controller == 1300) {
      if (randomGrade < 3) {
        //Changing the text on HTML to say that Player 1 has completed the class
        //Did this two more times for the other classes, only putting comments on this one
        doneThirdy.innerHTML = "CIS 130 Done";
        player1ClassGet.innerHTML = "CIS 130";
        //This will tell JS that Player 1 has completed the class
        firstClass = 1;
      }
    } else if (
      (secondClass == 0 && ps4Controller == 300) ||
      ps4Controller == 1800
    ) {
      if (randomGrade < 3) {
        doneFifty.innerHTML = "CIS 150 Done";
        player1ClassGet.innerHTML = "CIS 150";
        secondClass = 1;
      }
    } else if (
      (thirdClass == 0 && ps4Controller == 600) ||
      ps4Controller == 1500
    ) {
      if (randomGrade < 3) {
        doneSeventy.innerHTML = "CIS 170 Done";
        player1ClassGet.innerHTML = "CIS 170";
        thirdClass = 1;
      }
    }
  });
  if (
    ps4Controller == 0 &&
    firstClass == 1 &&
    secondClass == 1 &&
    thirdClass == 1
  ) {
    gradeChange.innerHTML = grades[randomGrade];
    checkYourGrades.innerHTML = "CHECK YOUR FINAL GRADE, PLAYER1\n(CAPSTONE)";
    if (randomGrade < 3) {
      checkYourGrades.innerHTML = "PLAYER 1 WINS!!!";
    }
  }
}
//This was created only because my outputs when putting the two functions together where not correct
//It fixed all problems
function GradeCheckPlayer2(xBoxController) {
  var randomGrade = Math.floor(Math.random() * 5);

  var grades = ["A", "B", "C", "D", "F"];

  var theChecker = document.getElementById("GradeCheck");
  theChecker.addEventListener("click", function () {
    //Same thing but with player two
    var doneThirdyT = document.getElementById("oneThirdyTwo");

    var doneFiftyT = document.getElementById("oneFiftyTwo");

    var doneSeventyT = document.getElementById("oneSeventyTwo");

    var player2ClassGet = document.getElementById("hidden");
    gradeChange = document.getElementById("gradeChange");
    gradeChange.innerHTML = grades[randomGrade];

    if ((firstClass1 == 0 && xBoxController == 200) || xBoxController == 1300) {
      if (randomGrade < 3) {
        doneThirdyT.innerHTML = "CIS 130 Done";
        player2ClassGet.innerHTML = "CIS 130";
        firstClass1 = 1;
      }
    } else if (
      (secondClass1 == 0 && xBoxController == 300) ||
      xBoxController == 1800
    ) {
      if (randomGrade < 3) {
        doneFiftyT.innerHTML = "CIS 150 Done";
        player2ClassGet.innerHTML = "CIS 150";
        secondClass1 = 1;
      }
    } else if (
      (thirdClass1 == 0 && xBoxController == 600) ||
      xBoxController == 1500
    ) {
      if (randomGrade < 3) {
        doneSeventyT.innerHTML = "CIS 170 Done";
        player2ClassGet.innerHTML = "CIS 170";
        thirdClass1 = 1;
      }
    }
  });
  if (
    xBoxController == 0 &&
    firstClass1 == 1 &&
    secondClass1 == 1 &&
    thirdClass1 == 1
  ) {
    gradeChange.innerHTML = grades[randomGrade];
    checkYourGrades.innerHTML = "CHECK YOUR FINAL GRADE, PLAYER2\n(CAPSTONE)";

    if (randomGrade < 3) {
      checkYourGrades.innerHTML = "PLAYER 2 WINS!!!";
    }
  }
}
//#endregion


//formatted by JS Beautify 