export class Projekt{
  projektId;
  projektName: string;
  projektDescription: string;
}

export interface ProjektResponse{
  Projects: Array<Projekt>;
}
