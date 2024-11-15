import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  walletAddress: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: false })
  industry: string;

  @Column()
  companySize: number;

  @Column({ nullable: false })
  verificationStatus: string;
}
