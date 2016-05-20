import {Component, OnInit} from 'angular2/core';

import {Select} from './select.cmp';

@Component({
  selector: 'tkf-app',
  moduleId: module.id,
  templateUrl: './app.tpl.html',
  directives: [
    Select
  ],
  providers: [
  ]
})
export class AppComponent implements OnInit {
  cityNames = [
    {id: '1', text: 'Toronto'},
    {id: '2', text: 'Vancouver'},
    {id: '3', text: 'Alberta'},
    {id: '4', text: 'Kingston'}
  ];

  constructor() {
    //
  }
  
  ngOnInit(): void {
    console.log('AppComponent init...');
  }

  onClick(): void {
    // you may want to load data from a remote server
    console.log('clicked the input');
  }
  
  onSelect(selectedItem: any): void {
    console.log('select item: ', selectedItem);
  }
}
