import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { TemplateService } from '../service/template.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.page.html',
  styleUrls: ['./produto-cadastro.page.scss'],
})
export class ProdutoCadastroPage implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formB: FormBuilder,
    private navCtrl: NavController,
    private template: TemplateService,
    private produtoServ: ProdutoService

  ) { 
    this.iniciarForm();

  }

  ngOnInit() {
  }


cadastrar(){
  this.template.loading.then(load => {



    load.present();
this.produtoServ.cadastrar(this.formGroup.value).subscribe(response=>{
  load.dismiss();
this.template.myAlert(response);
  

})
})

}

  cancelar() {
    this.navCtrl.navigateBack(['/home']);
 
  }
  iniciarForm() {
    this.formGroup = this.formB.group({

      nomeproduto: [],
      tipo: [],
      preco: [],
      descricao: [],
      quantidade: []
     
    })
  }

}
 