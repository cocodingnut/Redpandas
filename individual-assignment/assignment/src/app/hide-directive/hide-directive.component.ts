import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout-directive',
  templateUrl: './hide-directive.component.html',
  styleUrls: ['./hide-directive.component.sass']
})
export class TimeoutDirectiveComponent implements OnInit {

  longerText: string = "abracadabrabracadabraaaaaaaaaa";
  constructor() { }

  ngOnInit(): void {
  }

}
