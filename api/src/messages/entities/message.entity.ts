import {
  Column,
  Model,
  Table,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'messages'
})
export class Message extends Model<Message> {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  message: string

  @Column({
    type: DataType.BOOLEAN
  })
  isSent: boolean
}
