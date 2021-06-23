import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class bulletin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content:string;
}