import {Login,
        Cadastro} from "../pages"

import TabBottomNavigation from '../navigation/TabBottomNavigation'

const  stackScreens = [
  {
    name:"Login",
    component:Login,
    
  },
  {
    name:"TabBottomNavigation",
    component:TabBottomNavigation,
  },
  {
    name:"Cadastro",
    component:Cadastro,
  }
  ]

  export {stackScreens}