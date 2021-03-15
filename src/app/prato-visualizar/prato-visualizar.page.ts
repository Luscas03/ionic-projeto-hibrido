import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PratoService } from '../service/prato.service';
import { Prato } from '../model/prato';
import { AngularFireStorage } from '@angular/fire/storage';
import { TemplateService } from '../service/template.service';


@Component({
  selector: 'app-prato-visualizar',
  templateUrl: './prato-visualizar.page.html',
  styleUrls: ['./prato-visualizar.page.scss'],
})
export class PratoVisualizarPage implements OnInit {
  formGroup: FormGroup;
  prato: Prato = new Prato();
  imagem: any; // armazenado imagem / url
  idprato = "";

  constructor(private navCtrl: NavController,
    private formB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pratoServ: PratoService,
    private fireStorage: AngularFireStorage,
    private template: TemplateService,
  ) {


    this.iniciarForm();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl => {
      this.idprato = idUrl.get('id');
      this.downloadImage();

      this.pratoServ.buscarPorId(this.idprato).subscribe(response => {
        this.prato = response;

        this.iniciarForm();
        
      })

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id: [this.prato.id],
      nomeprato: [this.prato.nomeprato],
      calorias: [this.prato.calorias],
      grupo: [this.prato.grupo],

    })
  }
  remover() {
    this.navCtrl.navigateForward(['/prato-remove', this.prato.id]);
  }

  downloadImage() {
    // template load
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento
      this.fireStorage.storage.ref().child(`perfil/${this.idprato}.jpg`).getDownloadURL().then(url => {
        this.imagem = url;
      }).catch(err => {
        load.dismiss(); 
        this.imagem = "https://www.strokejoinville.com.br/wp-content/uploads/sites/804/2017/05/produto-sem-imagem-Copia-1.gif";
      })
    })
  }

  uploadImage(event) {
    this.template.loading.then(load => { // iniciar o carregamento
      this.imagem = event.srcElement.files[0]; // imagem do campo input type file
      load.present(); // forçar inicio carremento
      this.fireStorage.storage.ref().child(`perfil/${this.idprato}.jpg`).put(this.imagem).then(url => {
        this.downloadImage();
      }).catch(err => {
        load.dismiss();
        this.template.myAlert("Erro");
      })

    })
  }
}
