import{Status,
      PontosColetaMapa,
      BibliotecaMateriais,
      Usuario} from "../pages"

import DrawerNavigation from '../navigation/DrawerNavigation'
                            
const  tabBottomScreens = [
  {
    name:"DrawerNavigation",
    component:DrawerNavigation
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