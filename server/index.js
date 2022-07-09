const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


//LIST OF CONTROLLER METHODS
const { getCompliment, getFortune, postGoal, putGoal, deleteGoal } = require('./controller')
//GET
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
//POST
app.post("/api/post", postGoal);
//PUT
app.put("/api/put", putGoal);
//DELETE
app.delete("/api/delete", deleteGoal);

//LISTENER
app.listen(4000, () => console.log("Server running on 4000"));
