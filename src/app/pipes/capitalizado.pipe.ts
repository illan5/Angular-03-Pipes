import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): string {
  // // transform(value: unknown, edad: number, activo: boolean, mensaje: string): string {
  transform(value: string, todas: boolean = true): string {  
    // console.log(args);
    // //console.log({ edad, activo, mensaje });
    console.log(value);

    value = value.toLowerCase();
    let nombres = value.split(' ');

    if ( todas ) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
