var perc = 0;
var people = 0;
var bill = 0;
var tippp = 0;
var billpp = 0;
var custTip = false;
var tip5 = document.getElementById("tip5");
var tip10 = document.getElementById("tip10");
var tip15 = document.getElementById("tip15");
var tip25 = document.getElementById("tip25");
var tip50 = document.getElementById("tip50");
function SelectButton(btnid) {
  document.getElementById("tip5").style = "null";
  document.getElementById("tip10").style = "null";
  document.getElementById("tip15").style = "null";
  document.getElementById("tip25").style = "null";
  document.getElementById("tip50").style = "null";
  //document.getElementById("tipCustom").style = "null";
  var btn = document.getElementById(btnid.id);
  if (btnid.id == "tipCustom") {
    custTip = true;
  } else {
    document.getElementById("tta").value = "";
    btn.style.color = "var(--Very-dark-cyan)";
    btn.style.backgroundColor = "var(--Strong-cyan)";
    perc = btnid.id.replace(/tip/, "");
    custTip = false;
  }
}

function reset() {
  bill = document.getElementById("bta").value;
  people = document.getElementById("pta").value;
  if (custTip) {
    perc = document.getElementById("tta").value;
  }
  resetPeopleArea();
  document.getElementById("tipAmnt").innerHTML = "$" + tippp.toFixed(2);

  document.getElementById("totAmnt").innerHTML = "$" + billpp.toFixed(2);
}

function resetPeopleArea() {
  document.getElementById("pta").style = "null";
  document.getElementById("NPerror").style = "null";

  document.getElementById("NPerror").innerHTML = "";
  if (people == 0) {
    document.getElementById("pta").style.borderStyle = "solid";
    document.getElementById("pta").style.borderColor = "red";

    document.getElementById("NPerror").style.color = "red";

    document.getElementById("NPerror").innerHTML = "Can't be zero";
    tippp = 0;
    billpp = 0;
  } else {
    tippp = ((bill * perc) / people) * 0.01;

    billpp = bill / people + tippp;
  }
}
