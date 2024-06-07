import { Component, OnInit } from '@angular/core';

import liff from '@line/liff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img: string = ''
  name: string = ''
  uid: any

  constructor() { }
  ngOnInit() {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((profile) => {
          console.log(profile)
        })
        .catch((err) => {
          console.log("error", err);
        });
    }else{
      liff.login()
    }
  }
}
