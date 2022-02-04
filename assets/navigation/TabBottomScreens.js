import{Home,
      Status,
      SearchMap,
      RecyclingLibrary} from "../pages"


import StackNavigationApp from '../navigation/StackNavigationApp'                                

const  tabBottomScreens = [
  {
    name:"Home",
    component:StackNavigationApp
  },
  {
    name:"RecyclingLibrary",
    component:Status
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