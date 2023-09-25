export class StudentModel {
  id?: number;
  firstName!:string;
  lastName!:string;
  emailId!:string;
  phoneNo!:number;
  address!: {
    id?: number;
    city: string;
    state: string;
    country: string;
  }
}
