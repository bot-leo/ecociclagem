import {Login,
        Cadastro,
        TabBottomNavigation,
        DrawerNavigation
        } from "../pages"

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