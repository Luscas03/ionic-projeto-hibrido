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
    path: 'login-recuperar',
    loadChildren: () => import('./login-recuperar/login-recuperar.module').then( m => m.LoginRecuperarPageModule)
  },
 

  {
    path: 'marcar-consulta',
    loadChildren: () => import('./marcar-consulta/marcar-consulta.module').then( m => m.MarcarConsultaPageModule)
  },
  {
    path: 'dietas-servicos',
    loadChildren: () => import('./dietas-servicos/dietas-servicos.module').then( m => m.DietasServicosPageModule)
  },
  {
    path: 'dieta-user',
    loadChildren: () => import('./dieta-user/dieta-user.module').then( m => m.DietaUserPageModule)
  },
  {
    path: 'servicos-user',
    loadChildren: () => import('./servicos-user/servicos-user.module').then( m => m.ServicosUserPageModule)
  },
  {
    path: 'dieta-cetogenica',
    loadChildren: () => import('./dieta-cetogenica/dieta-cetogenica.module').then( m => m.DietaCetogenicaPageModule)
  },
  {
    path: 'dieta-low-carb',
    loadChildren: () => import('./dieta-low-carb/dieta-low-carb.module').then( m => m.DietaLowCarbPageModule)
  },
 
  {
    path: 'perfil-atualizar',
    loadChildren: () => import('./perfil-atualizar/perfil-atualizar.module').then( m => m.PerfilAtualizarPageModule)
  },
  {
    path: 'consulta-visualizar/:id',
    loadChildren: () => import('./consulta-visualizar/consulta-visualizar.module').then( m => m.ConsultaVisualizarPageModule)
  },
  {
    path: 'consulta-remove/:id',
    loadChildren: () => import('./consulta-remove/consulta-remove.module').then( m => m.ConsultaRemovePageModule)
  },
  {
    path: 'prato-visualizar/:id',
    loadChildren: () => import('./prato-visualizar/prato-visualizar.module').then( m => m.PratoVisualizarPageModule)
  },
  {
    path: 'prato-remove/:id',
    loadChildren: () => import('./prato-remove/prato-remove.module').then( m => m.PratoRemovePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
