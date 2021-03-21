import { Projekt } from './../../projekt/Projekt';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Operat } from '../operat/Operat';
import { OperatService } from '../../../_service/operat.service';
import { UpperCasePipe } from '@angular/common';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-new-operat',
  templateUrl: './new-operat.component.html',
  styleUrls: ['./new-operat.component.css']
})
export class NewOperatComponent implements OnInit {
operatForm:FormGroup;
operat= new Operat();
distance;
@Input()
selectRootProjekt:Projekt;
@Input() showMePartially:boolean;
@Output()
updateList = new EventEmitter<Projekt>();

  constructor(private operatService:OperatService, private tokenStorageService:TokenStorageService) {
   }

  ngOnInit(): void {
    this.operatForm = new FormGroup({
      operatNumber: new FormControl(null,Validators.required),
      operatLayer: new FormControl(null,Validators.required),
      odKm: new FormControl(null,[Validators.required,Validators.pattern('^[0-9]*$')]),
      doKm: new FormControl(null,[Validators.required, Validators.pattern('^[0-9]*$')])

    });
    this.onChanges();

  }
  onChanges(): void {
    this.operatForm.get('doKm').valueChanges.subscribe(val=>
      {this.distanceUpdate();}
    );
    this.operatForm.get('odKm').valueChanges.subscribe(val=>
     {this.distanceUpdate();}
    );
}
  distanceUpdate(): void{
    this.distance = this.operatForm.get('doKm').value - this.operatForm.get('odKm').value;
  }


  onSubmit(){
    console.log(this.tokenStorageService.getUser().userId);
    this.operat.operatNumber=this.operatForm.value.operatNumber;
    this.operat.layer=this.operatForm.value.operatLayer.toUpperCase();
    this.operat.odKm=this.operatForm.value.odKm.replace(/,/g, '.');
    this.operat.doKm=this.operatForm.value.doKm.replace(/,/g, '.');
    this.operat.projektId=this.selectRootProjekt.projektId;
    this.operat.createUser=this.tokenStorageService.getUser().userId;
    this.operat.updateUser=this.tokenStorageService.getUser().userId;
    this.operatService.saveOperat(this.operat).subscribe();
    this.updateList.emit(this.selectRootProjekt);
    this.operatForm.get('operatNumber').setValue(null);
    this.operatForm.get('operatLayer').setValue(null);
    this.operatForm.get('odKm').setValue(null);
    this.operatForm.get('doKm').setValue(null);

  }

}
