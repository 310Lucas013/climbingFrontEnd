export class UpdateAccount {
  firstName: string;
  middleName: string;
  lastName: string;
  uid: string;
  email: string;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    uid: string,
    email: string
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.uid = uid;
    this.email = email;
  }
}
