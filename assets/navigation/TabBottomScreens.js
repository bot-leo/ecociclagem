import{Home,
      Status,
      SearchMap,
      BibliotecaMateriais} from "../pages"


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
    component:Status
  },
]

export {tabBottomScreens}