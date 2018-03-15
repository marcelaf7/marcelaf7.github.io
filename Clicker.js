var clicks = 0;

var interns = 0;
var internPrice = 50;
var internSpeed = 1;
var employees = 0;
var employeePrice = 200;
var employeeSpeed = 5;
var programmers = 0;
var programmerPrice = 1000;
var programmerSpeed = 20;
var hackers = 0;
var hackerPrice = 10000;
var hackerSpeed = 100;

var tutorial = false;

var myVar = setInterval(idle, 1000);

function update()
{
    document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
}

function updateButtonColors()
{
    if(clicks >= internPrice)
    {
        tutorial = true;
        document.getElementById("tutorial").style.visibility = "visible";
        document.getElementById("internButton").style.backgroundColor = "#33FF36";
        setTimeout(endTutorial, 10000);
    }
}

function endTutorial()
{
    document.getElementById("tutorial").style.visibility = "hidden";
    document.getElementById("internButton").style.backgroundColor = "#FFFFFF";
}

function idle()
{
    clicks += (interns * internSpeed) + (employees * employeeSpeed) + (programmers * programmerSpeed) + (hackers * hackerSpeed);
    update();
    if(!tutorial)
    {
        updateButtonColors();
    }
}

function buyIntern()
{
    if(clicks >= internPrice)
    {
        clicks -= internPrice;
        interns += 1;
        document.getElementById("interns").innerHTML="Interns: " + String(interns);
    }
    update();
}
function buyEmployee()
{
    if(clicks >= employeePrice)
    {
        clicks -= employeePrice;
        employees += 1;
        document.getElementById("employees").innerHTML="Employees: " + String(employees);
    }
    update();
}

function buyProgrammer()
{
    if(clicks >= programmerPrice)
    {
        clicks -= programmerPrice;
        programmers += 1;
        document.getElementById("programmers").innerHTML="Programmers: " + String(programmers);
    }
    update();
}

function buyHacker()
{
    if(clicks >= hackerPrice)
    {
        clicks -= hackerPrice;
        hackers += 1;
        document.getElementById("hackers").innerHTML="Hackers: " + String(hackers);
    }
    update();        
}

function clicked()
{
    clicks += 1;
    document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
}