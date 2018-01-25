import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desksd',
  templateUrl: './desksd.component.html',
  styleUrls: ['./desksd.component.css']
})
export class DesksdComponent implements OnInit {
isSubmitted: boolean = false;
request = null;
  constructor() { }

  ngOnInit() {
  }

}
