function GetValues() {
    Value1 = parseInt(document.getElementById("Value1").value);
    Value2 = parseInt(document.getElementById("Value2").value);
}

if (Value1 <= 0 || Value2 <=0) {
    SetResult("Het getal dat is ingevoerd is te laag!");
    return false;
}

else {
    return true;
}

function Multiply() {
    if (GetValues()) {
        Result = Value1 * Value2;
        SetResult(Result);
    }
}

function Subtract() {
    if (GetValues()) {
        Result = Value1 - Value2;
        SetResult(Result);
    }   
}

function Sum() {
    if (GetValues()) {
        Result = Value1 + Value2;
        SetResult(Result);
    }
}

function Divide() {
    if (GetValues()) {
        Result = Value1 / Value2;
        let rounded = Result.toFixed(1);
        SetResult(rounded);
    }
}

function SetResult(Result) {
    ResultH1.innerHTML = "Result: " + Result;
}