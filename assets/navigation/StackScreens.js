import {Login,
        Cadastro} from "../pages"

import DrawerNavigation from '../navigation/DrawerNavigation'

const  stackScreens = [
  {
    name:"Login",
    component:Login,
    
  },
  {
    name:"DrawerNavigation",
    component:DrawerNavigation,
  },
  {
    name:"Cadastro",
    component:Cadastro,
  }
  ]

  export {stackScreens}