import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss']
})
export class NavarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animationNavarConfig
    this.animationPhotoPerfilConfing
    this.animationButtonsConfing
    this.animationButtonsConfing2
    this.animationButtonsConfing3
    this.animationButtonsConfing4
  }

  public animationNavarConfig = {
    height: [0, 60],
    duration: 1800,
    delay: 500,
    easing: 'easeInOutQuad'
  }

  public animationPhotoPerfilConfing = {
    opacity: [0, 1],
    duration: 1800,
    delay: 1000,
    easing: 'easeInOutQuad'
  };
  public animationButtonsConfing = {
    translateY: [-100, 0],
    duration: 1800,
    delay: 1500,
    easing: 'linear'
  };
  public animationButtonsConfing2 = {
    translateY: [-100, 0],
    duration: 1800,
    delay: 2000,
    easing: 'linear'
  };
  public animationButtonsConfing3 = {
    translateY: [-100, 0],
    duration: 1800,
    delay: 2500,
    easing: 'linear'
  };
  public animationButtonsConfing4 = {
    translateY: [-100, 0],
    duration: 1800,
    delay: 3000,
    easing: 'linear'
  };




}
