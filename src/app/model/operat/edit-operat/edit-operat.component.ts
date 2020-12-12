import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Operat } from '../operat/Operat';
import { Projekt } from '../../projekt/Projekt';
import { OperatService } from '../operat/operat.service';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-edit-operat',
  templateUrl: './edit-operat.component.html',
  styleUrls: ['./edit-operat.component.css']
})
export class EditOperatComponent implements OnInit {


  @ViewChild('odKmElement', {static: true}) odKmElement:ElementRef;
  operatForm:FormGroup;
  @Input()
  operat:Operat;
  @Input()
  showMeEditOperat:boolean;
  @Input()
  selectRootProjekt:Projekt;
  distance;
  @Output()
  updateShowMeEdit = new EventEmitter<boolean>();

  constructor(private operatService:OperatService, private tokenStorageService:TokenStorageService) { }

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

    this.operat.layer=this.operatForm.value.operatLayer.toUpperCase();
    this.operat.odKm=this.operatForm.get('odKm').value.toString().replace(/,/g, '.');
    this.operat.doKm=this.operatForm.get('doKm').value.toString().replace(/,/g, '.');
    this.operat.updateUser = this.tokenStorageService.getUser().userId;
    this.operatService.updateOperat(this.operat).subscribe();
    this.showMeEditOperat=false;
    this.updateShowMeEdit.emit(false);
  }
}
