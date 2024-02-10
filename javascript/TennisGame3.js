var pointNames = ["Love", "Fifteen", "Thirty", "Forty"];

var TennisGame3 = function(player1Name, player2Name) {
    this.p2Points = 0;
    this.p1Points = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    //This variable is used in two different places with two different meanings
    //var s;

    // Checks if it is not match point
    if ((this.p1Points < 4 && this.p2Points < 4) && (this.p1Points + this.p2Points < 6)) {

        //if not match point, assign proper term to player who scored
        var scoreUpdate;
        scoreUpdate = pointNames[this.p1Points];

        if(this.p1Points == this.p2Points) {
            return scoreUpdate + "-All"
        } else {
            return scoreUpdate + "-" + pointNames[this.p2Points];
        }
    } else {
        
        // if match point and tied, return 'Duce
        if (this.p1Points == this.p2Points)
            return "Deuce";

        //If match point and not tied, award 'Advantage' or 'Win' to proper player
        var scorerName;
        scorerName = this.p1Points > this.p2Points ? this.player1Name : this.player2Name;

        if((this.p1Points - this.p2Points) * (this.p1Points - this.p2Points) == 1) {
            return "Advantage " + scorerName;
        } else {
            return "Win for " + scorerName;
        }
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.p1Points += 1;
    else
        this.p2Points += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
