import { OperatService } from './../../operat/operat/operat.service';
import { ProjektService } from './../projekt.service';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Projekt } from '../Projekt';
import { Operat } from '../../operat/operat/Operat';


@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent{
  projektElementChild:Array<Projekt>;
  @Input()
  operaty= new Array<Operat>();
  projekt:Projekt;
  selectProjekt:Projekt;
  selectRootProjekt:Projekt;
  showVar;
  checkProjekt=true;
  @Output()
  updateProjekt = new EventEmitter<Projekt>();
  buttonText='Dodaj operat';


  constructor(private projektService: ProjektService, private operatService: OperatService) { }


  chooseSelectProjekt(projekt){

    this.selectProjekt=projekt;
   if(projekt!=null){
    this.checkProjekt=false;
    this.updateProjekt.emit(projekt);
    this.refresh()
    }
     }

     refresh(){
        this.projektService.geProjekt().subscribe(data => {
        this.projektElementChild = data;});
        if(this.selectProjekt){
        this.operatService.getOperat(this.selectProjekt.projektId).subscribe(data=>{
          this.operaty=data;});
        }
     }
     showNewOperatForm() {
      this.showVar = !this.showVar;
      if(this.showVar){
     this.buttonText='Wyjście';
      }
      else
      this.buttonText='Dodaj operat';
      }
      handleUpdateList(event){
       this.refresh();

       }


}
