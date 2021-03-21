import { ProjektService } from '../../../_service/projekt.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Projekt } from '../Projekt';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-projekt',
  templateUrl: './new-projekt.component.html',
  styleUrls: ['./new-projekt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjektComponent implements OnInit {
  addedProjekt=new Projekt();
  buttonDodajProjekt='Dodaj projekt';



  @Input() showMePartially: boolean;
  @Output()
  updateProjektNew = new EventEmitter();

  constructor(
    private projektService:ProjektService
       ) { }
  addNewProject(){
     this.projektService.postProjekt(this.addedProjekt).subscribe(data => {
    });
    this.updateProjektNew.emit(this.addedProjekt);


  }

  ngOnInit(): void {
    this.addedProjekt.projektId='';
    this.addedProjekt.projektName='';
    this.addedProjekt.projektDescription='';
  }

}
