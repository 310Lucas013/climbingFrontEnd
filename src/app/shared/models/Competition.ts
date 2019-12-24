export class Competition {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  participants: number;

  constructor(id: number, name: string, startDate: string, endDate: string, participants: number) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.participants = participants;
  }
}
