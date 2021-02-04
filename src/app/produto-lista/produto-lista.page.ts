import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.page.html',
  styleUrls: ['./produto-lista.page.scss'],
})
export class ProdutoListaPage implements OnInit {

lista : Produto[] = [];

  constructor(private produtoServ : ProdutoService) { }

  ngOnInit() {
    this.produtoServ.listaDeProdutos().subscribe(response=>{

      this.lista = response;

    })
  }

}
