//Quiz game
var name = prompt("What is your name");
if (name == "null") {
	name = "";
	alert("You don't have a name");
}
alert("Hello " + name);
var answer1 = prompt("What is the capital of USA", "New York City");
if (answer1 == "Washington D.C") {
    alert("That's correct!");
    alert("You're so smart!");
} else if (answer1 == "Washington") {
    alert("Washington is a state with its capital in Olympia and Seattle is its largest city");
} else {
    alert("How can you be so wrong?, The answer is Washington D.C.");
}
var answer2 = prompt("What is the largest city in the world?", "Shanghai");
if (answer2 == "Tokyo") {
	alert("That's correct!");
	alert("You're so smart!");
} else {
	alert("How can you be so wrong? Don't you know Tokyo?");
}
var lastquestion = confirm("Are you so smart?");
alert(lastquestion);