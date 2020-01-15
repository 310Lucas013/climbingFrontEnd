export class UpdateAccount {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  uid: string;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    uid: string
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.uid = uid;
  }
}
