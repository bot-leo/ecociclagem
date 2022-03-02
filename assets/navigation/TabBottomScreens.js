import{Home,
      Status,
      SearchMap,
      BibliotecaMateriais,
      Usuario} from "../pages"


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