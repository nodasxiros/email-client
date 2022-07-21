import {
  Column,
  Model,
  Table,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'emails'
})
export class Email extends Model<Email> {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  })
  address: string
}
