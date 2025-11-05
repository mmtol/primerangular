import { Component } from "@angular/core";

@Component(
{
    selector:"deportesv2-component",
    templateUrl:"./deportesv2.component.html",
    standalone: false,
    styleUrls:["./deportesv2.component.css"]
})

export class DeportesComponent2
{
    public numeros: Array<number>;

    constructor()
    {
        this.numeros = [99, 403, 404, 405, 44];
    }
}