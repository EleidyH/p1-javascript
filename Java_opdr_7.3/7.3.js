var count = 0;

function increaseNumber() 
{
count++;
if (count === 10)
{
     count = 0;
}
document.getElementById("display").innerText = count;
}