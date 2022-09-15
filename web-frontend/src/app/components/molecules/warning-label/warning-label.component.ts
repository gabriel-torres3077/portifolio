import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-label',
  templateUrl: './warning-label.component.html',
  styleUrls: ['./warning-label.component.scss']
})
export class WarningLabelComponent implements OnInit {
  @Input() warning_message: string = '';
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.warning_message);
  }

}
