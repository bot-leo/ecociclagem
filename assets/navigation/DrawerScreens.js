import{Home,
  Status,
  BibliotecaMateriais,
  TabBottomNavigation,
  
} from "../pages"

import Sobre from '../pages/Sobre'


const drawerScreens =[
  {
    name: 'Home',
   
    component: TabBottomNavigation,
   
  },
  {
    name: 'BibliotecaMateriais',
    
    component: TabBottomNavigation,
    
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