import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): any {
    //console.log(value);
    
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
        break;
      case 'm':
        return value * 1.60934 * 1000;
        break;        
      case 'cm':
        return value * 1.60934 * 1000 * 100;
        break;
      default:
        throw new Error("Target unit not supported");
        break;
    }
    
  }

}
