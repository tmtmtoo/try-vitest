import { MyDate } from "./innerClass";

export class MyDateString {
  myDate: MyDate;

  constructor() {
    this.myDate = new MyDate();
  }

  nowAsIso8601(): string {
    return this.myDate.now().toISOString();
  }
}
