
export interface Service {
    id: string;
    name: string;
    charges: string;
    isActive: string;
  }

export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    admittedDate: string;
    isDischarged: boolean;
    bedNo: string;
    services?: [] | null;
    image:string;
    isBillPaied:boolean?
  }
  