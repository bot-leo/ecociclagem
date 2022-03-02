import{Home,
  Status,
  BibliotecaMateriais,
  TabBottomNavigation
} from "../pages"


const drawerScreens =[
  {
    name: 'Home',
    title: 'Home',
    component: TabBottomNavigation,
   
  },
  {
    name: 'BibliotecaMateriais',
    title: 'BibliotecaMateriais',
    component: TabBottomNavigation,
    
  },
  {
    name: 'Coleta Seletiva',
    title: 'Status',
    component: Status,
    
  },
  {
    name: 'Ponto de Entrega Voluntaria',
    title: 'Status',
    component: Status,
    
  },
  {
    name: 'Coleta Porta a Porta',
    title: 'Status',
    component: Status,
    
  },
  {
    name: 'Perfil do Usuario',
    title: 'Status',
    component: Status,
    
  },
  {
    name: 'Sobre',
    title: 'Status',
    component: Status,
    
  },
  {
    name: 'Sair',
    title: 'Status',
    component: Status,
    
  },
  
]

export {drawerScreens}