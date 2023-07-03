import { Company } from "./companyInterface";

export interface Employee {
  id: number;
  names: string;
  surnames: string;
  email: string;
  phoneNumber: number;
  company: Company["name"];
  notes: string;
}
