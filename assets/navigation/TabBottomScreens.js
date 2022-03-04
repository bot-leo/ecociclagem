import{Status,
      PontosColetaMapa,
      BibliotecaMateriais,
      Usuario, ColetaSeletivaVideos} from "../pages"

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
    name:"ColetaSeletivaVideos",
    component:ColetaSeletivaVideos
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