import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animationsSub();
    this.animationDelayImg();
  }

  public animationsTitleConfig: any;
  public animationsImgConfig: any;
  public animationsDescriptionConfig: any;
  public animationsCargoConfig: any;
  public animationsBackgroundImgConfig: any;

  private animationsSub(){

  }

  private animationDelayImg(){
    //  let timeout = setTimeout(() => {
    //    this.animationsBackgroundImgConfig = {
    //      left: [5,-5],
    //      translateZ: [-2,-2],
    //      rotate: '1turn',
    //      loop: true,
    //      //direction: 'alternate',
    //      easing: 'easeInOutQuad',
    //      duration: 7000,
    //    }
    //  },6000);

    let timeout2 = setTimeout(() =>{

      this.animationsBackgroundImgConfig = {
        left: [600,0],
        opacity: [0,1],
        duration: 1800,
        delay: 500,
      }

      this.animationsCargoConfig = {
        translateX: [-200,5],
        duration: 1800,
        opacity: [0, 1],
        delay: 1000,
      };

      this.animationsDescriptionConfig = {
        translateX: [-590, 0],
        duration: 1800,
        opacity: [0, 1],
        delay: 1000,
      }

      this.animationsImgConfig = {
        translateX: [600, 0],
        duration: 1800,
        opacity: [0, 1],
        delay: 1000,
      }

      this.animationsTitleConfig = {
        translateX: [-500, 0],
        duration: 1800,
        opacity: [0, 1],
        delay: 1000,
      }

    },4000);
  }
}
