import {Login,
        Cadastro,
        EnvironmentalProjectScreen,
        Home,
        MyRecycleBins,
        RecyclingLibrary,
        SearchMap,
        Status,
        TabBottomNavigation
      } from "../pages"


const  stackScreens = [
  {
    name:"Login",
    component:Login
  },
  {
    name:"TabBottomNavigation",
    component:TabBottomNavigation
  },
  {
    name:"Cadastro",
    component:Cadastro
  },
  {
    name:"EnvironmentalProjectScreen",
    component:EnvironmentalProjectScreen
  },
  {
    name:"Home",
    component:Home
  },
  {
    name:"MyRecycleBins",
    component:MyRecycleBins
  },
  {
    name:"RecyclingLibrary",
    component:RecyclingLibrary
  },
  {
    name:"SearchMap",
    component:SearchMap
  },
  {
    name:"Status",
    component:Status
  }]

  export {stackScreens}