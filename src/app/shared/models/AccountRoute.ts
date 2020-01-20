import {ClimbingRoute} from './ClimbingRoute';
import {Account} from './Account';

export class AccountRoute {
  account: Account;
  route: ClimbingRoute;
  zone: number;

  constructor(
    account: Account,
    route: ClimbingRoute,
    zone: number
  ) {
    this.account = account;
    this.route = route;
    this.zone = zone;
  }
}
