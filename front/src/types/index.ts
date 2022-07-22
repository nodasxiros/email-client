export interface Email {
  id: number
  address: string,
}

export type RowProp = {
  email: Email
  handleChange: (e: Email) => void
  handleListChange: () => void
}

export interface Message{
  id: number
  message: string
  isSent: boolean
}
