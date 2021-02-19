import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

 import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
//caso não haja autorizacção irá retornar para a página de login!
 const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
   
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectToLogin}
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectToLogin}
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule),
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectToLogin}
  },
  {
    path: 'cliente-cadastro',
    loadChildren: () => import('./cliente-cadastro/cliente-cadastro.module').then( m => m.ClienteCadastroPageModule)
  },
  {
    path: 'cliente-lista',
    loadChildren: () => import('./cliente-lista/cliente-lista.module').then( m => m.ClienteListaPageModule)
  },
  {
    path: 'produto-cadastro',
    loadChildren: () => import('./produto-cadastro/produto-cadastro.module').then( m => m.ProdutoCadastroPageModule)
  },
  {
    path: 'produto-lista',
    loadChildren: () => import('./produto-lista/produto-lista.module').then( m => m.ProdutoListaPageModule)
  },
  {
    path: 'cliente-visualizar',
    loadChildren: () => import('./cliente-visualizar/cliente-visualizar.module').then( m => m.ClienteVisualizarPageModule)
  },
  {
    path: 'cliente-visualizar/:id',
    loadChildren: () => import('./cliente-visualizar/cliente-visualizar.module').then( m => m.ClienteVisualizarPageModule)
  },
  
  {
    path: 'cliente-atualizar',
    loadChildren: () => import('./cliente-atualizar/cliente-atualizar.module').then( m => m.ClienteAtualizarPageModule)
  },
  {
    path: 'cliente-atualizar/:id',
    loadChildren: () => import('./cliente-atualizar/cliente-atualizar.module').then( m => m.ClienteAtualizarPageModule)
  },
  {
    path: 'cliente-remove/:id',
    loadChildren: () => import('./cliente-remove/cliente-remove.module').then( m => m.ClienteRemovePageModule)
  },
  {
    path: 'login-recuperar',
    loadChildren: () => import('./login-recuperar/login-recuperar.module').then( m => m.LoginRecuperarPageModule)
  },
  {
    path: 'produto-visualizar/:id',
    loadChildren: () => import('./produto-visualizar/produto-visualizar.module').then( m => m.ProdutoVisualizarPageModule)
  },
  {
    path: 'produto-atualizar/:id',
    loadChildren: () => import('./produto-atualizar/produto-atualizar.module').then( m => m.ProdutoAtualizarPageModule)
  },
  {
    path: 'produto-remove/:id',
    loadChildren: () => import('./produto-remove/produto-remove.module').then( m => m.ProdutoRemovePageModule)
  },
  {
    path: 'teste-cliente',
    loadChildren: () => import('./teste-cliente/teste-cliente.module').then( m => m.TesteClientePageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
