import { Component } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";

@Component(
    {
        selector:"form-component",
        templateUrl:"./form.component.html",
        standalone:false,
        styleUrl:"./form.component.css"
    })

export class FormComponent
{
    //binding
    public user: any;
    public mensaje: string;

    //referencia
    @ViewChild("cajaNum1") cajaNum1:ElementRef;
    @ViewChild("cajaNum2") cajaNum2:ElementRef;

    public suma: number;

    constructor()
    {
        //binding
        this.mensaje="";
        this.user =
        {
            nombre:"",
            apellido:"",
            edad: 0
        }

        //referencia
        this.suma = 0;
        //en angular, aunque sean refs, todas las variables deben ser instanciadas
        this.cajaNum1 = new ElementRef(0);
        this.cajaNum2 = new ElementRef(0);
    }

    recibirDatos(): void
    {
        this.mensaje="Datos recibidos";
    }

    sumarNums(): void
    {
        let num1 = parseInt(this.cajaNum1.nativeElement.value);
        let num2 = parseInt(this.cajaNum2.nativeElement.value);

        this.suma = num1 + num2;
    }
}