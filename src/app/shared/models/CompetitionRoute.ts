import {Competition} from './Competition';
import {ClimbingRoute} from './ClimbingRoute';

export class CompetitionRoute {
  competition: Competition;
  climbingRoute: ClimbingRoute;

  constructor(competition: Competition, route: ClimbingRoute) {
    this.competition = competition;
    this.climbingRoute = route;
  }
}
