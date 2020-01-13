import {Competition} from './Competition';
import {ClimbingRoute} from './ClimbingRoute';

export class CompetitionRoute {
  id: number;
  route: ClimbingRoute;
  competition: Competition;

  constructor(competition: Competition, route: ClimbingRoute) {
    this.competition = competition;
    this.route = route;
  }
}
