import express from "express";
import {CreateSoccerTeam} from "../../core/Usecases/CreateSoccerTeam";
import {InMemorySoccerTeamRepository} from "../../adapters/repositories/InMemorySoccerTeamRepository";
import {GetSoccerTeam} from "../../core/Usecases/GetSoccerTeam";

const soccerTeamRouter = express.Router();

const soccerTeamRepository = new InMemorySoccerTeamRepository()
const createSoccerTeam = new CreateSoccerTeam(soccerTeamRepository)
const getSoccerTeam = new GetSoccerTeam(soccerTeamRepository)

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
    } catch {
        return res.status(400).send({
            message: "Soccer Team already exists",
        });
    }

});

soccerTeamRouter.get("/:id", (req, res) => {
    const id = {
        Id: req.params.id,
    };

    try {
        const soccerTeam = getSoccerTeam.execute(id)
        return res.status(200).send(soccerTeam.props);
    } catch {
        return res.status(400).send({
            message: "Soccer Team doesn't exist",
        });
    }

});

export {soccerTeamRouter};
