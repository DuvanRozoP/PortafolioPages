import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animationsCargoConfig
    this.animationsImgConfig
    this.animationsDescriptionConfig
    this.animationsTitleConfig
  }

  public animationsTitleConfig = {
    translateX: [-500, 0],
    duration: 1800,
    opacity: [0, 1],
    delay: 4000,
  }

  public animationsImgConfig = {
    translateX: [500, 0],
    duration: 1800,
    opacity: [0, 1],
    delay: 4500,
  }

  public animationsDescriptionConfig = {
    translateX: [-500, 0],
    duration: 1800,
    opacity: [0, 1],
    delay: 5000,
  }

  public animationsCargoConfig = {
    translateX: [-200,5],
    direction: 'alternate',
    loop: true,
    duration: 6000,
    delay: 6000
  };


}
