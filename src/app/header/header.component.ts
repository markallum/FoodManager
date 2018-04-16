import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() pageChange = new EventEmitter<string>();

  changePage(newPage: string) {
    this.pageChange.emit(newPage);
  }
}
