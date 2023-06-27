import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, fromEvent} from "rxjs";
import {User} from "../../model/user/User";
import {StorageService} from "../../service/storage.service";
import {CartService} from "../../service/cart.service";
import {NgForm} from "@angular/forms";
import {NavigationExtras, Router} from "@angular/router";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated !: BehaviorSubject<User>;
  isHover: boolean = false;
  constructor(private storageService : StorageService,
              public cartService : CartService,
              private router : Router,
              ) {
  }
  ngOnInit(): void {
    this.showNavbar();
    this.isAuthenticated = this.storageService.isAuthenticate;
  }

  showNavbar() {
    const scrollObservable = fromEvent(window, 'scroll');
    const navbar = document.getElementById('sub-navbar');
    const header = document.getElementById('default-header');
    scrollObservable.subscribe(() => {
      if (header && navbar) {
        if (window.scrollY > header.offsetHeight) {
          navbar.classList.remove('hidden')
          navbar.classList.add('fixed')
        } else {
          navbar.classList.add('hidden')
        }
      }
    });
  }

  logOut() {
    this.storageService.signOut()
  }

  submit(f: NgForm) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name" : f.value.name
      }
    };
    this.router.navigate(['/tim-kiem'], navigationExtras)
  }
}
