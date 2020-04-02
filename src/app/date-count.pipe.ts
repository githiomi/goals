import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any){
    const secsInADay = (60*60*24);
    let today: Date = new Date();
    let dateRn: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let dateDiff = Math.abs(value - dateRn);
    var dateCounter = ((dateDiff * 0.001)/secsInADay);
      console.log(today);
      

    if(dateCounter >= 1 && value > dateRn){
      return dateCounter;
    }else{
      return '0';
    }
    
  }

}
