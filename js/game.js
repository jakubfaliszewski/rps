var newgame = document.getElementById("newgame");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scis = document.getElementById("scis");
var result = document.getElementById("result");
var playerpoint = document.getElementById("playerpoints");
var botpoint = document.getElementById("botpoints");
var botpoints=0;
var playerpoints=0;
var cChoice="";
var pChoice="";
var score="";


function startnewgame()
{
    newgame.style.display = "none";
    document.getElementById("game").style.display = "block";
}

newgame.onclick = startnewgame;


    var playerChoice;


function fComputerChoice()
{
    var computerChoice = Math.random();
    if (computerChoice <0.34)
    {
        computerChoice = 1;
        cChoice="kamień";
        document.getElementById("enemyrock").setAttribute("class", "computerchoice");
        document.getElementById("enemypaper").setAttribute("class", "");
        document.getElementById("enemyscis").setAttribute("class", "");
    }
    else if(computerChoice <=0.67)
    {
        computerChoice = 2;
        cChoice="papier";
        document.getElementById("enemyrock").setAttribute("class", "");
        document.getElementById("enemypaper").setAttribute("class", "computerchoice");
        document.getElementById("enemyscis").setAttribute("class", "");
    }
    else
    {
        computerChoice = 3;
        cChoice="nożyce";
        document.getElementById("enemyrock").setAttribute("class", "");
        document.getElementById("enemypaper").setAttribute("class", "");
        document.getElementById("enemyscis").setAttribute("class", "computerchoice");

    }

	function fResult()
		{
		if(playerChoice == computerChoice)
			{
				score="remis";
			}
		else if(playerChoice == 1)
			{
				if (computerChoice == 2)
					{
						score=", że przegrałeś";
						botpoints++;
					}
				else if (computerChoice == 3)
					{
						score=", że wygrałeś";
						playerpoints++;
					}
			}
		else if(playerChoice == 2)
			{
				if (computerChoice == 3)
					{
						score=", że przegrałeś";
						botpoints++;
					}
				else if (computerChoice == 1)
					{
						score=", że wygrałeś";
						playerpoints++;
					}
			}
		else if(playerChoice == 3)
			{
				if (computerChoice == 1)
					{
						score=", że przegrałeś";
						botpoints++;
					}
				else if (computerChoice == 2)
					{
						score=", że wygrałeś";
						playerpoints++;
					}
			}
		}

    	fResult();

  	playerpoint.innerHTML=playerpoints;
  	botpoint.innerHTML=botpoints;
    result.innerHTML="Wybrałeś "+pChoice+", wróg "+cChoice+". Oznacza to "+score+".";
}

rock.onclick = function fRock() {playerChoice=1; pChoice="kamień"; fComputerChoice();};
paper.onclick = function fPaper() {playerChoice=2; pChoice="papier"; fComputerChoice();};
scis.onclick = function fScior() {playerChoice=3; pChoice="nożyce"; fComputerChoice();};
