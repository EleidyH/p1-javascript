function KleurEnTekstAanpasses()

{
    document.getElementById("kop1").style.color = "red";
    document.getElementById("kop1").innerHTML = "I have changed!";
}

function Reset()

{
    document.getElementById("kop1").style.color = "black";
    document.getElementById("kop1").innerHTML = "Welcome!";
}

function calculate(getal1, getal2)
{
    antwoord = getal1 + getal2;
    console.log("Het antwoord van de som is: ");
    console.log(antwoord);

}

function Keer5(getal1)
{
    antwoord = getal1 * 5;
    console.log("Het antwoord van de som is: ");
    console.log(antwoord);
}

function calculateMinutes(seconden)
{
    antwoord = seconden / 60;
    console.log("Het antwoord van de som is: ");
    console.log(antwoord);
}