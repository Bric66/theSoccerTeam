import express from "express";
import {soccerTeamRouter} from "./api/routes/soccerTeam";

const app = express();
const port = 3002;

app.use(express.json());

app.use("/soccerTeam",soccerTeamRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});