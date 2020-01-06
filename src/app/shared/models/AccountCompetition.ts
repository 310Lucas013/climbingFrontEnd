import {Competition} from './Competition';
import {Group} from '../enums/Group';

export class AccountCompetition {
  account: Account;
  competition: Competition;
  group: Group;

  constructor(
    account: Account,
    competition: Competition,
    group: Group
  ) {
    this.account = account;
    this.competition = competition;
    this.group = group;
  }
}
