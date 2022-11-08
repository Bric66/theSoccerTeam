import {UseCase} from './Usecase';
import {SoccerTeam} from "../entities/SoccerTeam";
import {SoccerTeamRepository} from "../repositories/SoccerTeamRepository";

export type RecoverSoccerTeamInput = {
    Id: string;
}

export class GetSoccerTeam implements UseCase<RecoverSoccerTeamInput, SoccerTeam> {

    constructor(private readonly soccerTeamRepository: SoccerTeamRepository
    ) {
    }

    execute(input: RecoverSoccerTeamInput): SoccerTeam {

        const soccerTeam = this.soccerTeamRepository.getById(input.Id);
        if (!soccerTeam) {
            throw new Error("Soccer Team doesn't exist")
        }
        return soccerTeam;
    }
}