import { OperatService } from '../../../_service/operat.service';
import { ProjektService } from '../../../_service/projekt.service';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Projekt } from '../Projekt';
import { Operat } from '../../operat/operat/Operat';
import { UserService } from 'src/app/_service/user.service/user.service';
import { ChangeUserNamePipe } from 'src/app/changeUserName.pipe';


@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent {
  projektElementChild: Array<Projekt>;
  @Input()
  operaty = new Array<Operat>();
  projekt: Projekt;
  selectProjekt: Projekt;
  selectRootProjekt: Projekt;
  showVar;
  checkProjekt = true;
  @Output()
  updateProjekt = new EventEmitter<Projekt>();
  buttonText = 'Dodaj operat';



  constructor(
    private projektService: ProjektService,
    private operatService: OperatService,
    private userService: UserService,
    private changeUserNamePipe: ChangeUserNamePipe) { }


  chooseSelectProjekt(projekt) {

    this.selectProjekt = projekt;
    if (projekt != null) {
      this.checkProjekt = false;
      this.updateProjekt.emit(projekt);
      this.refresh()
    }
  }

  refresh() {
    this.projektService.geProjekt().subscribe(data => {
      this.projektElementChild = data;
    });
    if (this.selectProjekt) {
      this.operatService.getOperat(this.selectProjekt.projektId).subscribe(
      data => {this.operaty = data;
               this.operaty = this.changeUserNamePipe.transform(this.operaty);
        }
      );


    }
  }
  showNewOperatForm() {
    this.showVar = !this.showVar;
    if (this.showVar) {
      this.buttonText = 'Wyjście';
    }
    else {
      this.buttonText = 'Dodaj operat';
    }
  }
  handleUpdateList(event) {
    this.refresh();

  }
 }
