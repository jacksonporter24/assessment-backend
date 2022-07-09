//axios request for Compliment Button

const complimentBtn = document.getElementById("complimentButton")
const postInput = document.querySelector("#post-input");
const putInput = document.querySelector("#put-input");
const putLocation = document.querySelector("#location");

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
const postButton = document.getElementById("postButton")

//POST REQUEST
const postGoal = () => {
    let goalObj = {
        newGoal: postInput.value 
    }
    console.log("geeze")
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



const putButton = document.getElementById("putButton")

//PUT REQUEST
const putGoal = () => {
    let putObj = {
        replaceGoal: putInput.value,
        locationReplace: putLocation.value 
    }
    console.log("put goal hit")
    axios.put(`http://localhost:4000/api/put/`, putObj )
        .then((res, err) => {
            console.log(res.data);
            let location = res.data.putLocationGoalReplace
            let replacementGoal = res.data.putGoalReplacement
            let element = document.getElementById(location)
            console.log(element)
            if (element === null){
                let newElement = document.createElement('h2')
                newElement.setAttribute("id",location)
                newElement.innerHTML = replacementGoal
                document.body.append(newElement)
            }
            else {
                element.innerHTML = replacementGoal
            }
        })
}


putButton.addEventListener("click", putGoal);