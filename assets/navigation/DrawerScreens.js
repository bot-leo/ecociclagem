import{Home,
  Status,
  BibliotecaMateriais,
  Sobre,
  ColetaSeletivaVideos
} from "./../pages"

const drawerScreens =[
  {
    name: 'Home',
    component: Home,
   
  },
  {
    name: 'BibliotecaMateriais',
    component: BibliotecaMateriais,
    
  },
  {
    name: 'Coleta Seletiva',
    component: ColetaSeletivaVideos,
    
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