import { Component, OnInit } from '@angular/core';
import { faFile, faFileCode, faFilePdf, faCog } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCog = faCog
  faFilePdf = faFilePdf;

  constructor() { }

  ngOnInit(): void {
  }

}
