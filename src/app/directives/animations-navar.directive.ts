import { Directive, ElementRef, Input } from '@angular/core';
import anime from 'animejs';

@Directive({
  selector: '[appAnimationsNavar]'
})
export class AnimationsNavarDirective {

  @Input() appAnimationsNavar: any;
  private animationsInstance: any;

  constructor(
    private element: ElementRef
  ) { }

  ngOnDestroy(): void {
    this.dispose();
  }

  ngOnChanges(changes: any): void {
    if ('appAnimationsNavar' in changes){
      this.dispose();
      this.animationsInstance = anime({
        targets: this.element.nativeElement,
        //... this.appAnimationsNavar
      })
    }
  }


  private dispose(){
    if (this.animationsInstance) {
      anime.remove(this.element.nativeElement);
      this.animationsInstance = null;
    }
  }
}
