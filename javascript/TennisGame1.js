//Sets up player1 and player2 objects with score and name attributes
var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

//Awards a point to whichever player won a volley
TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

//Assigns tennis-terminology equivalent to the current score
TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    //if scores are equal, assign proper term depending on scores
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    //If scores are not equal, determine which player has advantag/victory

        //Checks to see that it is match point and the player's scores are not currently equal
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {

        //Checks difference between scores to determine advantage
        var minusResult = this.m_score1 - this.m_score2;

        //Positive difference --> player 1 has advantage
        if (minusResult === 1) score = "Advantage player1"; 
        
        //Negative difference --> player 2 has advantage
        else if (minusResult === -1) score = "Advantage player2";

        //If score is greater than 4 and difference is positive and greater than or equal to 2, player 1 wins set
        else if (minusResult >= 2) score = "Win for player1";
        
        //If score is greater than 4 and difference is negative and less than or equal to -2, player 2 wins set
        else score = "Win for player2";      
        
        //If scores are not equal, and if both players have less than 4 points this set, 
        //  assign respective terminology to proper player
    } else {

        //Pass 1: assign player1 score to 'tempScore' and assign proper term to player1 score string
        //Pass 2: assign player2 score to 'tempScore' and assign proper term to player2 score string
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}