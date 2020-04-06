/* script for the troll game project
   Miles C. Stover 01/09/2020
   
   decision making process  txt style game 
   "chose your own path" surive or die choice is yours.
*/

// set up a event listener to a button to start the game 
document.getElementById("button").addEventListener("click", trollBattle);

// function to run game 
function trollBattle() {
	// initial prompt question for the user stored in a variable
	var action = window.prompt("Your walking through the forest. BAM! Troll jumps from out the bush\nDo You FIGHT\nDo You RUN\nDo You BRIBE to be left alone").toUpperCase();
	
	// swtich statement to handle the initial choice
	switch(action) {
		case "FIGHT":
			var smart = window.prompt("Are your smarter then a troll? (YES or NO)").toUpperCase();
			var strong = window.prompt("Are you stronger then a troll? (YES or NO)").toUpperCase();
			// if statment analyzes user respones
			if(smart === "YES" || strong === "YES") {
				document.getElementById("result").innerHTML = "You can either be smarter or stronger then a troll to survive!<br/> YOu Live to fight another day!";
			//clear any bad messages from the page
			document.getElementById("death").innerHTML = "";
			//playthe winning 
			document.getElementById("win").play();
			
			}
			else {
				document.getElementById("death").innerHTML = "your not strong or smart!<br/>why did u fight u have died...";
				//clear any messages
				document.getElementById("result").innerHTML = "";
				//loseing  sound
				document.getElementById("die").play();
			}
		    break;
			
		case "RUN":
			var fast = window.prompt("can u run fast? (YES or NO)").toUpperCase();
			// if statement analyzes the user respones
			if(fast === "YES") {
				document.getElementById("result").innerHTML = "your speed help you get away<br/>next time u might not be so lucky";
			//clear any bad messages from the page
			document.getElementById("death").innerHTML = "";
			//playthe winning 
			document.getElementById("win").play();
			
			}
			else {
				document.getElementById("death").innerHTML = "you where not fast enough <br/>the troll got u and ate your face";
				//clear any messages
				document.getElementById("result").innerHTML = "";
				//loseing  sound
				document.getElementById("die").play();	
			}
			break;
	       

		case "BRIBE":
			var money = window.prompt("you have to pay the troll-toll. do u have money to pay? (YES or NO)").toUpperCase();
			if(money === "YES") {
				var amount = window.prompt("how much money do u have?\n(Please Enter A Numeric Value)");
				
				//convert string to int
				amount = parseInt(amount);
				if(amount > 5) {
					document.getElementById("result").innerHTML = "nice! u were able to pay the troll-toll! it was only 5 bucks tho hahah ";
			
					document.getElementById("death").innerHTML = "";
			 
					document.getElementById("win").play();
				}
				else {
					document.getElementById("death").innerHTML = "troll need more money then that!<br/>u die...the troll ate your face";
				
					document.getElementById("result").innerHTML = "";
				
					document.getElementById("die").play();
				}
			}
			else {
				document.getElementById("death").innerHTML = "you have no money<br/>u die...";
				//clear any messages
				document.getElementById("result").innerHTML = "";
				//loseing  sound
				document.getElementById("die").play();
			}
			break;
	
		default:
			window.alert("enter a valid choice!");
			trollBattle();
			break;
	}
}
