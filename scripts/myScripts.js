



function countDays(CurrentDate)
{
	var xYear=CurrentDate.getFullYear();
        var xDay=new Date("December, 25, 2020");
        xDay.getFullYear(xYear);
        var newCount=(xDay-CurrentDate)/(1000*60*60*24);
        newCount=Math.round(newCount); 
    return(newCount);
}

var Today 	= new Date();
	var x = countDays(Today); 
	
console.log("waiting for input");	
function submitted() {
    var first_name = document.getElementById('fname').value;
	var html = "Hello, " + first_name + "." + " There are " + x + " days left until 2021!<br>";
	document.getElementById('result').innerHTML = html;
	console.log("Username submitted");
}

console.log("Showing output");
document.getElementById('submit').addEventListener('click', submitted);

	
