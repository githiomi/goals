import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("line-through", "13px", "red");
  }

  @HostListener("dblclick") ondoubleClicks(){
    this.textDeco("none", "17px", "black");
  }

  private textDeco(action:string, size:string, colorc:string){
    this.elem.nativeElement.style.textDecoration=action;
    this.elem.nativeElement.style.fontSize=size;
    this.elem.nativeElement.style.color=colorc;
  }


}
