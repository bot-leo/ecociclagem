import{Status,
      PontosColetaMapa,
      BibliotecaMateriais,
      Usuario,
      Home
} from "../pages"


import StackNavigationApp from '../navigation/StackNavigationApp'                                

const  tabBottomScreens = [
  {
    name:"Home",
    component:Home
  },
  {
    name:"BibliotecaMateriais",
    component:BibliotecaMateriais
  },
  {
    name:"Status",
    component:Status
  },
  {
    name:"PontosColetaMapa",
    component:PontosColetaMapa
  },
  {
    name:"Usuario",
    component:Usuario
  }
]

export {tabBottomScreens}