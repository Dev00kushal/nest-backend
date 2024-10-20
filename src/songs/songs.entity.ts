import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('song')
export class Song{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column('varchar',{array:true})
    artists: string[];


    @Column('date')
    releaseDate: Date;

    @Column('time')
    duration:Date

    @Column('text')
    lyrics: string

} 