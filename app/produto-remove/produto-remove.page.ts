import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-produto-remove',
  templateUrl: './produto-remove.page.html',
  styleUrls: ['./produto-remove.page.scss'],
})
export class ProdutoRemovePage implements OnInit {
  produto : Produto = new Produto();
  constructor(private produtoServ : ProdutoService,
    private activatedRoute : ActivatedRoute,
    private template : TemplateService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl=>{

      let id = idUrl.get('id')
     this.produtoServ.buscarPorId(id).subscribe(response=>{
   this.produto = response;
  console.log(this.produto);
  
      
 
  
      
  
     })
        
  
  
    })
    
  }
excluir(){
  this.template.loading.then(load => {



    load.present();
  this.produtoServ.excluir(this.produto.id).subscribe(response=>{
    load.dismiss();
this.template.myAlert("Excluído com Sucesso!");
this.navCtrl.navigateRoot(['/produto-lista']);


  })
  })
}
}
