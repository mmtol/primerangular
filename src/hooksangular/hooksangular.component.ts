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
    constructor()
    {
        console.log("constructor: primer metodo de inicio del component");
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