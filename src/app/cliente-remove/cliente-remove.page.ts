import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-remove',
  templateUrl: './cliente-remove.page.html',
  styleUrls: ['./cliente-remove.page.scss'],
})
export class ClienteRemovePage implements OnInit {

  
  
  cliente : Cliente = new Cliente();
  constructor(private clienteServ: ClienteService,
    private activatedRoute : ActivatedRoute,
    private template : TemplateService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(idUrl=>{

      let id = idUrl.get('id');

      

      this.clienteServ.buscarPorId(id).subscribe(response=>{

        this.cliente = response;
        console.log(this.cliente);
        
     

      })



    })

 




  }
  excluir(){
    this.template.loading.then(load => {



      load.present();

      this.clienteServ.excluir(this.cliente.id).subscribe(response=>{

        load.dismiss();
        
        this.template.myAlert("Excluído com sucesso");
        this.navCtrl.navigateRoot('/cliente-lista');
      })
    })

  }

}
 