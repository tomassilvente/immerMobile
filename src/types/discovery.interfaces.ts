export interface Day {
  day: string
  number: string
}

export interface CardDataProps {
  title: string
  image: string
  date: string
  time: string
  price: number
}

export interface NextDaysProps {
  Days: Day[]
}

// ! I know this is not a interface or a type, but it should be replaced soon.
export const Days: Day[] = [
  {
    day: 'Sat',
    number: '22 Oct'
  },
  {
    day: 'Sun',
    number: '23 Oct'
  },
  {
    day: 'Mon',
    number: '24 Oct'
  },
  {
    day: 'Tue',
    number: '25 Oct'
  },
  {
    day: 'Wed',
    number: '26 Oct'
  },
  {
    day: 'Thu',
    number: '27 Oct'
  },
  {
    day: 'Fri',
    number: '28 Oct'
  }
]
