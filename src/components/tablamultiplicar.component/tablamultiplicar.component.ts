import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component(
{
  selector: 'app-tablamultiplicar-component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent 
{
  @ViewChild("cajaNum") cajaNum:ElementRef;
  
  public resultados: Array<number>;

  constructor()
  {
    this.resultados = [];

    this.cajaNum = new ElementRef(0);
  }

  multiplicar()
  {
    let num = parseInt(this.cajaNum.nativeElement.value);
    this.resultados = [];

    for (let i = 1; i <= 10; ++i)
    {
      this.resultados.push(num*i);
    }
  }
}
