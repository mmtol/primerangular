import { Component, OnInit, DoCheck } from "@angular/core";

@Component(
{
    selector:"hooks-angular",
    standalone: false,
    templateUrl:"hooksangular.component.html",
    styleUrls:["hooksangular.component.css"]
})

export class HooksAngular implements OnInit
{
    public mensaje:string;

    constructor()
    {
        console.log("constructor: primer metodo de inicio del component");
        this.mensaje = "Hoy es miercoles";
    }

    cambiarMensaje(): void
    {
        if (this.mensaje == "Hoy es miercoles")
        {
            this.mensaje = "y mañana jueves";
        }
        else
        {
            this.mensaje="Hoy es miercoles";
        }
    }

    ngOnInit(): void 
    {
        console.log("soy oninit, despues del constructor");
    }

    ngDoCheck(): void
    {
        console.log("soy oninit, cambiando algo en el render");
    }
}