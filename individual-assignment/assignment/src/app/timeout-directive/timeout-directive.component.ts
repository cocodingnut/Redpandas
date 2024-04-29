import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout-directive',
  templateUrl: './timeout-directive.component.html',
  styleUrls: ['./timeout-directive.component.sass']
})
export class TimeoutDirectiveComponent implements OnInit {

  longerText: string = "abracadabrabracadabraaaaaaaaaa";
  constructor() { }

  ngOnInit(): void {
  }

}
