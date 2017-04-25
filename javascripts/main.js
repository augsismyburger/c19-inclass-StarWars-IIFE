console.log("Be Humble");

// var resistanceLocation = "D'Qar";

let checkObject = document.getElementById("check-object");
checkObject.addEventListener("click", introduceStarWars);

function introduceStarWars(event) {
    console.log("Star Wars IIFE", StarWars);
}

let locButton = document.getElementById("get-location");
locButton.addEventListener("click", function() {
    StarWars.getLocation(locButton.getAttribute("whoIsIt"))
});



let locButton2 = document.getElementById("get-location2");
locButton2.addEventListener("click", function() {
    StarWars.getLocation(locButton2.getAttribute("whoIsIt"));
});

let addChar = document.getElementById("sign-up");
addChar.addEventListener("click", function() {
    let newCharName = document.getElementById("newChar").value;

    let whichSide;
    let radios = document.getElementsByName("whichside");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            whichSide = radios[i].value;
            break;
        }
    }
    if (whichSide == 0) {
        StarWars.setEvil(newCharName);
    }else if(whichSide == 1) {
        StarWars.setGood(newCharName);
    }else if(whichSide == 2) {
        StarWars.addJedi(newCharName);
    }
});

let removeJedi = document.getElementById('killLuke');
removeJedi.addEventListener("click", function() {
    StarWars.removeJedi("Luke Skywalker", "Darth Boner");
});
let removeJedi2 = document.getElementById('killYoda');
removeJedi2.addEventListener("click", function() {
    StarWars.removeJedi("Yoda");
});
