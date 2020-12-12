
import { Projekt } from './../../projekt/Projekt';
import { Component, OnInit, OnChanges, Input, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Operat } from './Operat';
import { OperatService } from './operat.service';



@Component({
  selector: 'app-operat',
  templateUrl: './operat.component.html',
  styleUrls: ['./operat.component.css']
})
export class OperatComponent implements OnInit, OnChanges {
  @Input()
  operaty:Array<Operat>;
  operat:Operat;
  @Input()
  selectRootProjekt:Projekt;
  selectProjekt=new Projekt();
  exportColumns: any[];
  cols: any[];
  showEditOperat=false;
  @ViewChild('title') titleElement: ElementRef;


  constructor(private operatService:OperatService) { }


  exportPdf() {
    import('jspdf').then(jsPDF => {
        import('jspdf-autotable').then(x => {
            const doc = new jsPDF.default(0,0);
            doc.autoTable(this.exportColumns, this.operaty);
            doc.save('operaty.pdf');
        })
    })
}

exportExcel() {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.operaty);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'operaty-');
    });
}

editOperat(rowIndex){

this.operat = new Operat();
this.operat = this.operaty[rowIndex];
this.showEditOperat=true;
this.titleElement.nativeElement.focus();

}

showEditOperatForm() {
  this.showEditOperat = !this.showEditOperat;
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if(this.selectRootProjekt){
    this.selectProjekt=this.selectRootProjekt;
            }

  }
  ngOnInit(): void {
    this.cols = [
      { field: 'operatNumber', header: 'Numer Operatu' },
      { field: 'layer', header: 'Warstwa' },
      { field: 'odKm', header: 'od Km' },
      { field: 'doKm', header: 'do km' }
  ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));

  }
  handleUpdateOperat(operat){
    this.operatService.getOperat(this.operat.projektId).subscribe(data=>{
      this.operaty=data;});
    }
  updateShowMeEditMethod(onOff:boolean){
       this.showEditOperat=onOff;
    }
  }
