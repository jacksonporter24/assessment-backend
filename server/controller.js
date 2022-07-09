let globalId = 4;
const listOfGoals = [];

module.exports = {

    //Don't change this code. Use it as inspiration. Write another function below. 
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A stranger will bring you good luck today.", "Great things will come if you stop procrastinating.", "Be kind to all."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postGoal: (req, res) => {
        console.log("this is in the controller");
        listOfGoals.push(req.body.newGoal);
        let goalPlacement = {
            goalContent : req.body.newGoal,
            locationOfGoal : listOfGoals.length - 1
        }
        res.status(200).send(goalPlacement)
    },
  
    putGoal: (req, res) => {
        console.log("This is in the putGoal")
        let location = req.body.locationReplace
        let goal = req.body.replaceGoal
        if(location < 0) {
            listOfGoals[0] = goal
            location = 0
        }
        else if (location >= listOfGoals.length) {
            listOfGoals.push(goal)
            location = listOfGoals.length -1
        } else {
            listOfGoals[location] = goal
        }
        let goalReplacement2 = {
            putGoalReplacement: goal,
            putLocationGoalReplace: location

        }
        res.status(200).send(goalReplacement2)
    }


}
