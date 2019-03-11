import { Component, OnInit } from '@angular/core';
import { ArrayService } from './array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularTable';
  constructor(private ArrayService: ArrayService) { }

  mydata  = this.ArrayService.getarray();
  heading = this.ArrayService.getcolumn();
  ngOnInit() {
  }

}
