import express from "express";
import {CreateSoccerTeam} from "../../core/Usecases/CreateSoccerTeam";
import {InMemorySoccerTeamRepository} from "../../adapters/repositories/InMemorySoccerTeamRepository";

const soccerTeamRouter = express.Router();

const soccerTeamRepository = new InMemorySoccerTeamRepository()
const createSoccerTeam = new CreateSoccerTeam(soccerTeamRepository)

soccerTeamRouter.post("/", (req, res) => {
    const body = {
        name: req.body.name,
        creationDate: req.body.creationDate,
        stadium: req.body.stadium,
        coach: req.body.coach,
        president: req.body.president,
    };

    try {
        const soccerTeam = createSoccerTeam.execute(body)
        return res.status(200).send(soccerTeam.props);
    }catch{
        return res.status(400).send({
            message: "Soccer Team already exists",
        });
    }

});

export {soccerTeamRouter};
