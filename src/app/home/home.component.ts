
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Projekt } from '../model/projekt/Projekt';
import { Operat } from '../model/operat/operat/Operat';
import { ProjektService } from '../model/projekt/projekt.service';
import { OperatService } from '../model/operat/operat/operat.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showVar;
  projektElement = new Array<Projekt>();
  operatArray = new Array<Operat>();
  selectProjekt = new Projekt();
  operatLayer;
  kilometraz;
  kmOd;
  kmDo;
  checkProjekt = true;


  constructor(private projektService: ProjektService,
    private operatService: OperatService) {
  }
  ngOnInit(): void {

    const inputOperatLayer = document.getElementById('operatLayer');
    const inputkilometraz = document.getElementById('kilometraz');
    const inputkilometrDo = document.getElementById('kmDo');
    const inputkilometrOd = document.getElementById('kmOd');

    // Execute a function when the user releases a key on the keyboard
    // tslint:disable-next-line:only-arrow-functions
    inputOperatLayer.addEventListener('keyup', function (event) {

      if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('searchByLayerButton').click();
      }
    });
    // tslint:disable-next-line:only-arrow-functions
    inputkilometraz.addEventListener('keyup', function (event) {

      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('searchByLayerKilometr').click();
      }
    });
    // tslint:disable-next-line:only-arrow-functions
    inputkilometrDo.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('searchBetweenKilometr').click();
      }
    });
    // tslint:disable-next-line:only-arrow-functions
    inputkilometrOd.addEventListener('keyup', function (event) {
         if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        document.getElementById('kmDo').focus();
      }
    });
  }

  showNewProjektForm() {
    this.showVar = !this.showVar;
  }
  handleupdateProjekt(addProjekt) {
    this.projektService.geProjekt().subscribe(data => {
      this.projektElement = data;
    }
    );

    this.selectProjekt = addProjekt;
    console.log('handle update projekt' + this.selectProjekt.projektName);
    this.showVar = !this.showVar;
    this.checkProjekt = false;
  }
  searchByKilometrButton() {
    this.kilometraz = this.kilometraz.replace(/,/g, '.');
    this.operatService.getOperatsByKm(this.selectProjekt.projektId, this.kilometraz)
      .subscribe(data => {
        this.operatArray = data;
      })
  }

  searchByLayerButton() {
    this.operatService.getOperatsByLayer(this.selectProjekt.projektId, this.operatLayer)
      .subscribe(data => {
        this.operatArray = data;
      })
  }
  searchBetween() {
    this.kmOd = this.kmOd.replace(/,/g, '.');
    this.kmDo = this.kmDo.replace(/,/g, '.');
    this.operatService.getOperatsInScope(this.selectProjekt.projektId, this.kmOd, this.kmDo)
      .subscribe(data => {
        this.operatArray = data;
      })
  }

  handleUpdate(addProjekt: Projekt) {
    this.selectProjekt = addProjekt;
    this.checkProjekt = false;
  }

}