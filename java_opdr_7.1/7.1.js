// Vraag de gebruiker naar de prijs van het product
var productPrice = prompt("Hoeveel kost het product dat je wilt kopen?");

// Converteer de invoer naar een getal
var productPriceNumber = Number(productPrice);

// Aanmaken van de variabele voor het budget
var budget = 100;

// Controleer of er genoeg budget is met een IF ELSE statement
if (budget >= productPriceNumber) 
{
    document.getElementById("result").innerText = "Je hebt genoeg geld!";
    document.getElementById("result").style.color = "green";
} 
else 
{
    document.getElementById("result").innerText = "Helaas, te weinig geld";
    document.getElementById("result").style.color = "red";
}