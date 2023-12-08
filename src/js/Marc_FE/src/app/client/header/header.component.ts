import {Component, OnInit} from '@angular/core';
import {fromEvent, map, of, switchMap} from "rxjs";
import {User} from "../../model/user/User";
import {StorageService} from "../../service/storage.service";
import {CartService} from "../../service/cart.service";
import {NgForm} from "@angular/forms";
import {NavigationExtras, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!: User;
  constructor(private storageService : StorageService,
              public cartService : CartService,
              private pService : ProductService,
              private router : Router,
              ) {
  }
  ngOnInit(): void {
    this.showNavbar();
    this.storageService.isAuthenticate
      .pipe(
        map(user => this.user = user),
        switchMap(_=> this.cartService.getCart())
      ).subscribe()
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
    this.cartService.clearCart();
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
