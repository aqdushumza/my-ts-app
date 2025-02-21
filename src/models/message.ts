import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'messages' })
export class Message extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    id!: number; // ✅ Explicitly marked as PRIMARY KEY

    @Column({ type: DataType.STRING, allowNull: false })
    text!: string;
}
