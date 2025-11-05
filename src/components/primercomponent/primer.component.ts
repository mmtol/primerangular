import { Component } from "@angular/core";

//un component debe tener siempre la declaracion de su contenido
@Component(
{
    //debemos declarar el nombre del component medante su selector en html
    //en angular los selectores llevan guin
    selector:"primer-component",
    standalone: false,
    //por ahora no voy a tener html separado, podemos incluirlo denro del propio component
    templateUrl:"primer.component.html",
    styleUrls:["primer.component.css"]
})

//cada component siempre debe tener una clase asociada en su ts
//este nombre de clase si lleva mayusculas y se declara dentro de app-module.ts
export class PrimerComponent
{
    //aqui es donde se declaran las variables, estas deben tener un tipado (ts)
    public titulo: string;
    public descripcion: string;
    public year: number;

    //en angular tenemos un constructor
    //en este, será donde instanciaremos los elementos de mi clase
    constructor()
    {
        //para acceder a objetos de la clase, utilizamos this
        this.titulo = "Titulo";
        this.descripcion = "Esto es la descripcion";
        this.year = 2002;
    }
}