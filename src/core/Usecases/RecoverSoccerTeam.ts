import {v4 as uuidv4} from "uuid";
import {UseCase} from './Usecase';
import {SoccerTeam} from "../entities/SoccerTeam";
import {SoccerTeamRepository} from "../repositories/SoccerTeamRepository";

export type RecoverSoccerTeamInput = {
    Uuid: string;
}

export class RecoverSoccerTeam implements UseCase<RecoverSoccerTeamInput, SoccerTeam> {

    soccerTeamRepository: SoccerTeamRepository

    constructor(soccerTeamRepository: SoccerTeamRepository) {
        this.soccerTeamRepository = soccerTeamRepository
    }

    execute(input: RecoverSoccerTeamInput): SoccerTeam {

        const soccerTeam=this.soccerTeamRepository.getById(input.Uuid);
        if(!soccerTeam){
            throw new Error("Soccer Team doesn't exist")
        }
        return soccerTeam;
    }


}