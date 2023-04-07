export class Todo {
  public id:number;
  public texto:string;
  public completado:boolean;

  /**
              // "./node_modules/todomvc-app-css/index.css"
   *
   */
  constructor(texto:string) {
    this.texto = texto;
    this.id = Math.random()
    this.completado = false;
  }
}
