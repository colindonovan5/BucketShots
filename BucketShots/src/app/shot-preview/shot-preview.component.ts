import { Component, OnInit } from '@angular/core';
import { Shot } from '../Shot';

@Component({
  selector: 'app-shot-preview',
  templateUrl: './shot-preview.component.html',
  styleUrls: ['./shot-preview.component.css']
})
export class ShotPreviewComponent implements OnInit {

  shot: Shot = new Shot('Test', 'Cleveland, OH', '../../assets/AsainLanternFestival-6899.jpg');

  constructor() {

  }

  ngOnInit() {
  }

}
