//THIS IS THE GETTING OF ELEMENTS
const complimentBtn = document.getElementById("complimentButton")
const input = document.querySelector("#input");
const goalLocation = document.querySelector("#goalLocation");

//axios request for Compliment Button
//GET COMPLEMENT
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//axios request for Fortune Button
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

//POST REQUEST
const postButton = document.getElementById("postButton")

const postGoal = () => {
    let goalObj = {
        newGoal: input.value 
    }
    console.log("post goal")
    axios.post(`http://localhost:4000/api/post/`, goalObj )
        .then((res, err) => {
            console.log(res.data);
            let newElement = document.createElement('h2')
            newElement.setAttribute("id",res.data.locationOfGoal)
                newElement.innerHTML = res.data.goalContent
                document.body.append(newElement)
        })
}
postButton.addEventListener("click", postGoal);


//PUT REQUEST
const putButton = document.getElementById("putButton")

const putGoal = () => {
    let putObj = {
        replaceGoal: input.value,
        locationReplace: goalLocation.value 
    }
    console.log("put goal hit")
    axios.put(`http://localhost:4000/api/put/`, putObj )
        .then((res, err) => {
            console.log(res.data);
            let replacedLocation = res.data.putLocationGoalReplace
            let replacementGoal = res.data.putGoalReplacement
            let element = document.getElementById(replacedLocation)
            console.log(element)
            if (element === null){
                let newElement = document.createElement('h2')
                newElement.setAttribute("id",replacedLocation)
                newElement.innerHTML = replacementGoal
                document.body.append(newElement)
            }
            else {
                element.innerHTML = replacementGoal
            }
        })
}

putButton.addEventListener("click", putGoal);

//DELETE REQUEST

const deleteButton = document.getElementById("deleteButton")

const deleteGoal = () => {
    console.log("delete button hit")
    axios.delete(`http://localhost:4000/api/delete/`)
        .then((res, err) => {
            console.log(res.data);
            let itemsToDelete = res.data
            for (let index = 0; index < itemsToDelete; index++) {
                let element = document.getElementById(index)
                if (element != null){
                    element.remove()
                }
            }
        })
}
deleteButton.addEventListener("click", deleteGoal);