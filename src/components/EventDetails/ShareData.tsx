<<<<<<< HEAD
import Prissy from '../../public/assets/prissy-pic.svg'
import Steve from '../../public/assets/steve.svg'
import Kaima from '../../public/assets/Kaima.svg'
import Quraimat from '../../public/assets/Quraimat.svg'

const shareData = [
  {
    id: 1,
    name: 'Prissy Davis',
    profilePic: Prissy
  },
  {
    id: 1,
    name: 'Steve Noah',
    profilePic: Steve
  },
  {
    id: 1,
    name: 'Kaima Owens',
    profilePic: Kaima
  },
  {
    id: 1,
    name: 'Quraimat Zen',
    profilePic: Quraimat
  }
]
=======

const shareData = [
  {
      id: 1,
      name:"Prissy Davis",
      profilePic:'/assets/randomProfile1.png'
  },
  {
      id: 1,
      name:"Steve Noah",
      profilePic:'/assets/randomProfile2.png'
  },
  {
      id: 1,
      name:"Kaima Owens",
      profilePic:'/assets/randomProfile3.png'
  },
  {
      id: 1,
      name:"Quraimat Zen",
      profilePic:'/assets/randomProfile4.png'
  }
];
>>>>>>> pay-per-view

export type shareDataType = typeof shareData[0]
export default shareData
