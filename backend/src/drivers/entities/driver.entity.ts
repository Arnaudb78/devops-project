// This is just a reference class for our Prisma schema
export class Driver {
  id: number;
  name: string;
  licenseNumber: string;
  phoneNumber?: string;
  email?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
