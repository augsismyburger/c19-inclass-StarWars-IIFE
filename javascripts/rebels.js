console.log("rebel data loaded");

var StarWars = (function(originalStarWars) {

    var location = "D'Qar";
    var keyPlayers = ["Chewie", "Han Solo", "Lando Calrisian", "Princess Leia", "eee-wok 1"];
    var jedi = ["Luke Skywalker", "Obi-Wan Kenobi", "Rey maybe Skywalker", "Mace Windu", "Yoda"];
    originalStarWars.getLocation = function(whoAsks) {
        console.log("whoAsks", whoAsks);
        let tell = true;
        let evilPlayers = StarWars.getEvil();
        evilPlayers.forEach(function(item) {
            if (item === whoAsks) {
                tell = false;
            }
        });
        if (tell) {
            console.log(whoAsks, "is on the light side, The rebels are located on: ", location);
        }else {
            console.log("You are evil, be gone!");
        }

    };

    originalStarWars.addJedi = function(who) {
        jedi.push(who);
        console.log(jedi);
    };
    originalStarWars.setGood = function(who) {
        keyPlayers.push(who);
        console.log(keyPlayers);
    }

    originalStarWars.removeJedi = function(who, name) {
        let whichIndex;
        jedi.forEach(function(item, index) {
            if (item === who) {
                whichIndex = index;
            }
        });
        jedi.splice(whichIndex, 1);
        console.log("Jedi After Death", jedi);

        if(name) {
            StarWars.setEvil(name);
        }
    };

    return originalStarWars


})(StarWars);
