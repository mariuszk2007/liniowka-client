export class Operat {
  operatId: string;
  operatNumber: number;
  projektId: string;
  layer: string;
  odKm: number;
  doKm: number;
  createUser:string;
  updateUser:string;

}
export interface OperatResponse{
  Operaty:Array<Operat>;
}
