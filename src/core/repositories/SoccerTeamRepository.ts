import {SoccerTeam} from "../entities/SoccerTeam";


export interface SoccerTeamRepository {
    save(soccerTeam: SoccerTeam): void;

    exist(name: string): boolean;

    getById(id:string): SoccerTeam;
}