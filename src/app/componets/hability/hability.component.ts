import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hability',
  templateUrl: './hability.component.html',
  styleUrls: ['./hability.component.scss']
})
export class HabilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public habilitys = [
    {
      hability: 'Html',
      bar: 'htmlBar progress',
      points: 'width: 300px',
    }
    ,
    {
      hability: 'Css',
      bar: 'cssBar progress',
      points: 'width: 200px',
    },
    {
      hability: 'JavaScript',
      bar: 'jsBar progress',
      points: 'width: 350px',
    },
    {
      hability: 'TypeScript',
      bar: 'tsBar progress',
      points: 'width: 50px',
    }
  ]

}
