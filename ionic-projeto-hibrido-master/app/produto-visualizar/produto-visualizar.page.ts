import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produto-visualizar',
  templateUrl: './produto-visualizar.page.html',
  styleUrls: ['./produto-visualizar.page.scss'],
})
export class ProdutoVisualizarPage implements OnInit {

  formGroup : FormGroup;
  produto : Produto = new Produto();


  constructor(
private activatedRoute : ActivatedRoute,
private produtoServ : ProdutoService,
private formB : FormBuilder,
private navCtrl : NavController


  ) {
this.iniciarForm();

   }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(idUrl=>{

    let id = idUrl.get('id')
   this.produtoServ.buscarPorId(id).subscribe(response=>{
 this.produto = response;
    console.log(this.produto);
    
    this.iniciarForm();

    

   })
      


  })
  

  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id:[this.produto.id],
      nomeproduto: [this.produto.nomeproduto],
      tipo: [this.produto.tipo],
      preco: [this.produto.preco],
      descricao: [this.produto.descricao],
      quantidade: [this.produto.quantidade]
     
    })
  }
atualizar(){
this.navCtrl.navigateForward(['/produto-atualizar',this.produto.id]);
}

remover(){
  this.navCtrl.navigateForward(['/produto-remove',this.produto.id]);
  }
}
