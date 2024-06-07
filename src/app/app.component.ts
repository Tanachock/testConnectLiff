import { Component, OnInit } from '@angular/core';
import { LiffService } from './liff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private LiffService:LiffService){}

  ngOnInit(){
    this.LiffService.initLiff()
  }
}
