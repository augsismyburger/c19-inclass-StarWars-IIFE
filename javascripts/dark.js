console.log("Darkside Load");

var StarWars = (function(){
    var location = "Unknown";
    var keyPlayers = ["Count Dooku", "Darth Maul", "General Greivous", "Greedo", "Darth Vader", "Kylo Ren"];
    return {
        getEvil: function() {
            // console.log("Evil list of bad guys", keyPlayers);
            return keyPlayers;
        },
        setEvil: function(who) {
            keyPlayers.push(who);
            console.log("evil players", keyPlayers);
        }
    }
})();

