import {Competition} from './Competition';
import {Account} from './Account';
import {Group} from '../enums/Group';

export class AccountCompetition {
  account: Account;
  competition: Competition;
  groupName: Group;
  score: number;

  constructor(
    account: Account,
    competition: Competition,
    groupName: Group
  ) {
    this.account = account;
    this.competition = competition;
    this.groupName = groupName;
  }
}
