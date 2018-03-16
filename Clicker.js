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

var buttonNotReadyColor = "#4869AA";
var buttonReadyColor = "#699BFF";
var textNotReadyColor = "#6F6F6F";
var textReadyColor = "#000000";

var tutorial = false;

var myVar = setInterval(autoClick, 1000);

function update()
{
    document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
    updateButtonColors();
}

function updateButtonColors()
{
    if(clicks >= internPrice)
    {
        document.getElementById("internButton").style.backgroundColor = buttonReadyColor;
        document.getElementById("internButton").style.color = textReadyColor;
    }
    else
    {
        document.getElementById("internButton").style.backgroundColor = buttonNotReadyColor;
        document.getElementById("internButton").style.color = textNotReadyColor;
    }

    if(clicks >= employeePrice)
    {
        document.getElementById("employeeButton").style.backgroundColor = buttonReadyColor;
        document.getElementById("employeeButton").style.color = textReadyColor;
    }
    else
    {
        document.getElementById("employeeButton").style.backgroundColor = buttonNotReadyColor;
        document.getElementById("employeeButton").style.color = textNotReadyColor;
    }

    if(clicks >= programmerPrice)
    {
        document.getElementById("programmerButton").style.backgroundColor = buttonReadyColor;
        document.getElementById("programmerButton").style.color = textReadyColor;
    }
    else
    {
        document.getElementById("programmerButton").style.backgroundColor = buttonNotReadyColor;
        document.getElementById("programmerButton").style.color = textNotReadyColor;
    }

    if(clicks >= hackerPrice)
    {
        document.getElementById("hackerButton").style.backgroundColor = buttonReadyColor;
        document.getElementById("hackerButton").style.color = textReadyColor;
    }
    else
    {
        document.getElementById("hackerButton").style.backgroundColor = buttonNotReadyColor;
        document.getElementById("hackerButton").style.color = textNotReadyColor;
    }
}

function startTutorial()
{
    if(clicks >= internPrice)
    {
        tutorial = true;
        document.getElementById("tutorial").style.visibility = "visible";
        document.getElementById("internButton").style.backgroundColor = buttonReadyColor;
        setTimeout(endTutorial, 10000);
    }
}

function endTutorial()
{
    document.getElementById("tutorial").style.visibility = "hidden";
    document.getElementById("internButton").style.backgroundColor = buttonNotReadyColor;
}

function autoClick()
{
    clicks += (interns * internSpeed) + (employees * employeeSpeed) + (programmers * programmerSpeed) + (hackers * hackerSpeed);
    update();
    if(!tutorial)
    {
        startTutorial();
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