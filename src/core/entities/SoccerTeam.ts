export type SoccerTeamProperties = {
    name: string;
    creationDate: Date;
    stadium: string;
    coach: string;
    president: string;
    Uuid: string;
}

export class SoccerTeam {
    props: SoccerTeamProperties;

    constructor(
        props: SoccerTeamProperties
    ) {
        this.props = props;
    }
}
