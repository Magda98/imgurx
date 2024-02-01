import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadingErrorComponent } from '../loading-error/loading-error.component';

@Component({
  selector: 'mx-query-state',
  templateUrl: './query-state.component.html',
  styleUrls: ['./query-state.component.scss'],
  standalone: true,
  imports: [SpinnerComponent, LoadingErrorComponent],
})
export class QueryStateComponent<T> {
  @Input() query!: CreateQueryResult<T>;
  @Output() reloadData = new EventEmitter<void>();
}
