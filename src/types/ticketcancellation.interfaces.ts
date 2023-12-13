export interface TicketProps {
  id: string | number
  event: string
  date: string
  time: string
  price: string
  img: string
  tab?: string
}

export interface ModalProps {
  img: string
  text: string
  btnText: string
  btnAction?: () => void
}

export interface DeleteModalProps {
  close: () => void
}
