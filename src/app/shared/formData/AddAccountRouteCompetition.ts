export class AddAccountRouteCompetition {
  email: string;
  routeId: number;
  zone: number;
  competitionId: number;

  constructor(
    email: string,
    routeId: number,
    zone: number,
    competitionId: number
  ) {
    this.email = email;
    this.routeId = routeId;
    this.zone = zone;
    this.competitionId = competitionId;
  }
}
