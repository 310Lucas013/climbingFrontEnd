export class AddAccountRoute {
  email: string;
  routeId: number;
  zone: number;

  constructor(
    email: string,
    routeId: number,
    zone: number
  ) {
    this.email = email;
    this.routeId = routeId;
    this.zone = zone;
  }
}
