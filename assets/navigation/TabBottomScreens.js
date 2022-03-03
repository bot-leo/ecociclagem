import{Home,
      Status,
      SearchMap,
      BibliotecaMateriais,
     DrawerNavigation} from "../pages"

import Usuario from '../pages/Usuario'

import StackNavigationApp from '../navigation/StackNavigationApp'                                

const  tabBottomScreens = [
  {
    name:"Home",
    component:StackNavigationApp
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
    name:"SearchMap",
    component:SearchMap
  },
  {
    name:"Usuario",
    component:Usuario
  }
]

export {tabBottomScreens}