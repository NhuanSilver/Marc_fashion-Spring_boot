import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links : string[] = ['Quản lí sản phẩm', 'Quản lí người dùng']
  currentLink: string = this.links[0];
}
