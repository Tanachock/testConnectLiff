import { Component, OnInit } from '@angular/core';

import liff from '@line/liff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img: any
  name: string = ''
  uid: any

  constructor() { }
  ngOnInit() {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((profile) => {
          console.log(profile)
          this.name = profile.displayName
          this.img = profile.pictureUrl
          this.uid = profile.userId
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }
}
