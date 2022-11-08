import {v4 as uuidv4} from "uuid";
import {UseCase} from './Usecase';
import {SoccerTeam} from "../entities/SoccerTeam";
import {SoccerTeamRepository} from "../repositories/SoccerTeamRepository";

export type CreateSoccerTeamInput = {
    name: string;
    creationDate: Date;
    stadium: string;
    coach: string;
    president: string;
}

export class CreateSoccerTeam implements UseCase<CreateSoccerTeamInput, SoccerTeam> {

    soccerTeamRepository: SoccerTeamRepository

    constructor(soccerTeamRepository: SoccerTeamRepository) {
        this.soccerTeamRepository = soccerTeamRepository
    }

    execute(input: CreateSoccerTeamInput): SoccerTeam {
        const soccerTeamExists = this.soccerTeamRepository.exist(input.name);
        if (soccerTeamExists) {
            throw new Error("Soccer Team already exists");
        }

        const idNumber = uuidv4();
        const soccerTeam = new SoccerTeam
        ({
            name: input.name,
            creationDate: input.creationDate,
            stadium: input.stadium,
            coach: input.coach,
            president: input.president,
            Uuid: idNumber,
        });
        this.soccerTeamRepository.save(soccerTeam);
        return soccerTeam;
    }


}