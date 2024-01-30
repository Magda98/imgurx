import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mx-loading-error',
  templateUrl: './loading-error.component.html',
  styleUrls: ['./loading-error.component.scss'],
  standalone: true,
})
export class LoadingErrorComponent {
  @Output() reloadData = new EventEmitter<void>();
}
