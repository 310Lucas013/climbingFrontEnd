import {Group} from '../enums/Group';

export class AddAccountCompetition {
  name: string;
  email: string;
  group: Group;

  constructor(
    name: string,
    email: string,
    group: Group
  ) {
    this.name = name;
    this.email = email;
    this.group = group;
  }
}
