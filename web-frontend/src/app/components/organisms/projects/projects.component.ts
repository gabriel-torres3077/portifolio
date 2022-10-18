import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects = [
    {
      title: 'Projeto 1',
      image: '../../../../assets/images/placeholder.png',
      likes: 2
    },
    {
      title: 'Projeto 2',
      image: '../../../../assets/images/placeholder.png',
      likes:  4
    },
    {
      title: 'Projeto 3',
      image: '../../../../assets/images/placeholder.png',
      likes:  999
    },
    {
      title: 'Projeto 4',
      image: '../../../../assets/images/placeholder.png',
      likes:  9
    }
  ]
  ngOnInit(): void {
    console.log('Im Alive')
  }

}
