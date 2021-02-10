import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';
@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.page.html',
  styleUrls: ['./produto-atualizar.page.scss'],
})
export class ProdutoAtualizarPage implements OnInit {

  formGroup: FormGroup;
  produto: Produto = new Produto();


  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoServ: ProdutoService,
    private formB: FormBuilder,
    private navCtrl: NavController,
    private template: TemplateService


  ) {
    this.iniciarForm();

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl => {

      let id = idUrl.get('id')
      this.produtoServ.buscarPorId(id).subscribe(response => {
        this.produto = response;
        console.log(this.produto);

        this.iniciarForm();



      })



    })


  }
  iniciarForm() {
    this.formGroup = this.formB.group({

      nomeproduto: [this.produto.nomeproduto],
      tipo: [this.produto.tipo],
      preco: [this.produto.preco],
      descricao: [this.produto.descricao],
      quantidade: [this.produto.quantidade]

    })
  }
  atualizar() {
    this.template.loading.then(load => {




      load.present();
      this.produtoServ.atualizar(this.produto.id, this.formGroup.value).subscribe(response => {
      
        load.dismiss();
        this.template.myAlert(response);
        this.navCtrl.navigateRoot(['/produto-lista']);


      }, err=>{
        
        this.template.myAlert(err);
        
        load.dismiss();
      })
    })
  }


}
