import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface IPagination {
  min: number;
  max: number;
  page: number;
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
  @Input() size: number;
  @Input() total: number;
  @Output() pageChanged = new EventEmitter<IPagination>();
  page = 1;

  onNext = () => {
    if (!this.canNext) { return; }
    this.page++;
    this.pageChanged.emit({
      min: this.min,
      max: this.max,
      page: this.page,
   });
  }

  onPrev = () => {
    if (!this.canPrev) { return; }
    this.page--;
    this.pageChanged.emit({
      min: this.min,
      max: this.max,
      page: this.page,
   });
  }

  get min() {
    return (this.page - 1) * this.size + 1;
  }

  get max(): number {
    return (this.page) * this.size;
  }

  get canNext() {
    return this.max < this.total;
  }

  get canPrev() {
    return this.min > 1;
  }

}
