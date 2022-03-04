import{Home,
  Status,
  BibliotecaMateriais,
  Sobre
} from "./../pages"

import TabBottomNavigation from '../navigation/TabBottomNavigation'

const drawerScreens =[
  {
    name: 'Home',
    component: TabBottomNavigation,
   
  },
  {
    name: 'BibliotecaMateriais',
    component: BibliotecaMateriais,
    
  },
  {
    name: 'Coleta Seletiva',
    component: Status,
    
  },
  {
    name: 'Ponto de Entrega Voluntaria',
    component: Status,
    
  },
  {
    name: 'Coleta Porta a Porta',
    component: Status,
    
  },
  {
    name: 'Perfil do Usuario',
    component: Status,
    
  },
  {
    name: 'Sobre',
    component: Sobre,
    
  },
  {
    name: 'Sair',
    component: Status,
    
  },
  
]

export {drawerScreens}