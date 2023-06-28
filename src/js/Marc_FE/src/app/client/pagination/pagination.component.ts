import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 3;
  @Input() totalPages: number = 10;
  @Output() pageEmit = new EventEmitter<number>;
  pageChanged(page: number) {
    this.currentPage = page;
    this.pageEmit.emit(this.currentPage);
  }
}
