import {Login,
        Cadastro,
        TabBottomNavigation,
        } from "../pages"

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