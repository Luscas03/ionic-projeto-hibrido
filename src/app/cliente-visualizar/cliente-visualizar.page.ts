import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Cliente } from '../model/cliente';

import { ClienteService } from '../service/cliente.service';



@Component({

  selector: 'app-cliente-visualizar',

  templateUrl: './cliente-visualizar.page.html',

  styleUrls: ['./cliente-visualizar.page.scss'],

})

export class ClienteVisualizarPage implements OnInit {

formGroup : FormGroup;



  cliente : Cliente = new Cliente();




  constructor(
    private navCtrl : NavController,
    private formB: FormBuilder,

    private activatedRoute : ActivatedRoute,

    private clienteServ : ClienteService,
) {

      this.iniciarForm();

    }



  ngOnInit() {



    this.activatedRoute.paramMap.subscribe(idUrl=>{

      let id = idUrl.get('id');

      

      this.clienteServ.buscarPorId(id).subscribe(response=>{

        this.cliente = response;

        console.log(this.cliente);

        this.iniciarForm();

      })



    })

  }



  iniciarForm() {

    this.formGroup = this.formB.group({

      id :[this.cliente.id],

      nome: [this.cliente.nome],

      cpf: [this.cliente.cpf],

      cidade: [this.cliente.cidade],

      endereco: [this.cliente.endereco],

      numero: [this.cliente.numero],

      estado: [this.cliente.estado],

      email: [this.cliente.email],

      telefone: [this.cliente.telefone]

    })

  }
  atualizar(){
    

      this.navCtrl.navigateForward(['/cliente-atualizar', this.cliente.id]);
    
   
    

  }

}