import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.page.html',
  styleUrls: ['./produto-lista.page.scss'],
})
export class ProdutoListaPage implements OnInit {

lista : Produto[] = [];

  constructor(private produtoServ : ProdutoService,
  private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.produtoServ.listaDeProdutos().subscribe(response=>{

      this.lista = response;

    })
  }
visualizar(produto){
this.navCtrl.navigateForward(["/produto-visualizar", produto.id]);
}
}
