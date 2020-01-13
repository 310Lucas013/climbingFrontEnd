export class Account {
  id: number;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  // createdAt: string;
  uid: string;

  constructor(
    email: string,
    uid: string
  ) {
    this.email = email;
    this.uid = uid;
  }
}
