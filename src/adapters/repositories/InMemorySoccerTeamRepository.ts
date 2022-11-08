import {SoccerTeamRepository} from "../../core/repositories/SoccerTeamRepository";
import {SoccerTeam} from "../../core/entities/SoccerTeam";


const dbSoccerTeam = new Map();

export class InMemorySoccerTeamRepository implements SoccerTeamRepository {
    save(soccerTeam: SoccerTeam): void {
        dbSoccerTeam.set(soccerTeam.props.Id, soccerTeam);
    }

    exist(name: string): boolean{
        const values = Array.from(dbSoccerTeam.values());
        const soccerTeamExists = values.find(
            (elem) =>
                elem.props.name === name
        );
        return !!soccerTeamExists;
    }

    getById(Id: string): SoccerTeam {
       return dbSoccerTeam.get(Id) ;
    }
}