import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import "reflect-metadata"

@Entity()
export class Student {

    // constructor(idStudent: number, nameStudent: string, ageStudent: number){
    //     this.idStudent: idStudent,
    //     this.nameStudent,
    //     this.ageStudent
    // }

    @PrimaryGeneratedColumn()
    idStudent : number;

    @Column()
    nameStudent: string;
    
    @Column()
    ageStudent: number; 
}


export interface IStudent{
    idStudent ?: number;
    nameStudent: string;
    ageStudent: number;
}