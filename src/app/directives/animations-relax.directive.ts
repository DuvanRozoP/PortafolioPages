import { Directive, ElementRef, Input } from '@angular/core';
import anime from 'animejs';

@Directive({
  selector: '[appAnimationsRelax]'
})
export class AnimationsRelaxDirective {

  @Input() appAnimationsRelax: any;
  private animationsInstance: any;

  constructor(
    private element: ElementRef
  ) { }

  ngOnDestroy(): void {
    this.dispose();
  }

  ngOnChanges(changes:  any): void {
    if ('appAnimationsRelax' in changes) {
      this.dispose();
      this.animationsInstance = anime({
        targets: this.element.nativeElement,
        //... this.appAnimationsRelax
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
