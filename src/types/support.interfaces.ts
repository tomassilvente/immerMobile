export interface Data {
  msg: string
  time: string
  byUser: boolean
}

export interface ChatData {
  chat: Data
}

export interface Dataset {
  dataset: Data[]
}

export interface CommentInputProps {
  placeholder: string
}

export interface faqs {
  title: string
  desc: string
}
