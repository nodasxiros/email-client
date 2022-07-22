export interface Email {
  id: number
  address: string,
}

export type RowProp = {
  email: Email
  handleChange: (e: Email) => void
}

export interface Message{
  id: number
  message: string
  isSent: boolean
}
