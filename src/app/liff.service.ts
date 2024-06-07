import { Injectable } from '@angular/core';
import liff from '@line/liff';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiffService {

  /*constructor() { }

  initliff() {
    liff
      .init({
        liffId: "2005506236-JNw3MvnV",
      })
      .then(() => {
        console.log('init liff suscess')
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
    }

    lifflogin() {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    }
    getProfile() {
      return liff.getProfile()
    }
*/

  private liff_id = '2005506236-JNw3MvnV'
  constructor() {}

  initLiff() {
    return from(liff.init({ liffId: this.liff_id }));
  }

  getProfile() {
    return from(liff.getProfile());
  }

  isLoggedIn() {
    return liff.isLoggedIn();
  }

  login() {
    return liff.login();
  }

  logout() {
    return liff.logout();
  }

}
