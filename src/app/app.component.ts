import { Component, OnInit } from '@angular/core';
import { LiffService } from './liff.service';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private LiffService:LiffService){}

  ngOnInit(){
    liff.init({
    liffId: "2005506236-JNw3MvnV",
  })
  .catch((err) => {
    console.log(err.code, err.message);
  });
  }
}
