import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notcompleted'
})
export class NotcompletedPipe implements PipeTransform {

  transform( title:string):string {
    return title.substring(0,20);
  }

}
