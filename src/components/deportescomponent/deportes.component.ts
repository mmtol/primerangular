import { Component } from "@angular/core";

@Component(
{
    selector:"deportes-component",
    templateUrl:"./deportes.component.html",
    standalone: false,
    styleUrls:["./deportes.component.css"]
})

export class DeportesComponent
{
    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor()
    {
        this.deportes = ["Canicas", "Curling", "Dardos", "Petanca", "Tenis"];
        this.numeros = [99, 403, 404, 405];
    }
}