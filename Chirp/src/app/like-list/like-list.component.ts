import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
        username: "Jimmy",
        time: new Date(2024, 4, 1, 8, 15, 0),
        location: "New York",
        text: "Lorem ipsum dolor sit amet"
    },
    {
        username: "Lucy",
        time: new Date(2024, 3, 15, 10, 30, 0),
        location: "Los Angeles",
        text: "Consectetur adipiscing elit"
    },
    {
        username: "Alex",
        time: new Date(2024, 4, 1, 12, 45, 0),
        location: "London",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        username: "Emma",
        time: new Date(2024, 4, 1, 15, 0, 0),
        location: "Paris",
        text: "Ut enim ad minim veniam"
    },
    {
        username: "Max",
        time: new Date(2024, 3, 29, 17, 15, 0),
        location: "Tokyo",
        text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        username: "Sophia",
        time: new Date(2024, 3, 28, 19, 30, 0),
        location: "Sydney",
        text: "Lorem ipsum dolor sit amet"
    },
    {
        username: "Oliver",
        time: new Date(2024, 4, 1, 21, 45, 0),
        location: "New York",
        text: "Consectetur adipiscing elit"
    },
    {
        username: "Ava",
        time: new Date(2024, 4, 2, 23, 0, 0),
        location: "Los Angeles",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        username: "Jack",
        time: new Date(2024, 3, 25, 1, 15, 0),
        location: "London",
        text: "Ut enim ad minim veniam"
    },
    {
        username: "Isabella",
        time: new Date(2024, 4, 1, 3, 30, 0),
        location: "Paris",
        text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ];

  isShown = true;

  onClick() {
    this.isShown = !this.isShown;
  }
}
