import { Component } from '@angular/core';
import { IPagination } from 'src/components/pagination/pagination.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onPageChanged = (e: IPagination) => {
    console.log(e);
  }
}
