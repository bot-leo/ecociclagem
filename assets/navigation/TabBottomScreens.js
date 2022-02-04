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

export {tabBottomScreens}