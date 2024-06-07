import { Component, OnInit } from '@angular/core';
import { LiffService } from '../liff.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isLoggedIn: any;
  profile: any;
  img: string = ''
  name: string = ''
  uid: any

  constructor(private LiffService: LiffService) { }
  ngOnInit() {
    this.isLoggedIn = this.LiffService.isLoggedIn();
    if(this.isLoggedIn) {
      this.LiffService.getProfile().subscribe((profile) => {
        this.profile = profile;
      });
    } else {
    this.LiffService.login();
  }
  console.log(this.profile)
  }
}
