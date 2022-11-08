import express from "express";
import {CreateSoccerTeam} from "../../core/Usecases/CreateSoccerTeam";
import {InMemorySoccerTeamRepository} from "../../adapters/repositories/InMemorySoccerTeamRepository";
import {RecoverSoccerTeam} from "../../core/Usecases/RecoverSoccerTeam";

const soccerTeamRouter = express.Router();

const soccerTeamRepository = new InMemorySoccerTeamRepository()
const createSoccerTeam = new CreateSoccerTeam(soccerTeamRepository)
const recoverSoccerTeam = new RecoverSoccerTeam(soccerTeamRepository)

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

soccerTeamRouter.post("/recover", (req, res) => {
    const body = {
        Uuid: req.body.Uuid,
    };

    try {
        const soccerTeam = recoverSoccerTeam.execute(body)
        return res.status(200).send(soccerTeam.props);
    }catch{
        return res.status(400).send({
            message: "Soccer Team doesn't exist",
        });
    }

});

export {soccerTeamRouter};
