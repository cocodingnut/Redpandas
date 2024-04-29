import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.module';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.sass']
})
export class AdminUserListComponent implements OnInit {

  selectedIndex: number | null = null;
  usersList: User[] = [];
  selectedUser: User | undefined;

  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.users.getAllData().subscribe((res) => {
      this.usersList = [...res]; 
    });
  }

  onAddNew(){
    console.log("gonna add new");
  }

  // TODO: try not display user when click delete
  onSelectUser(index: number){
    this.selectedIndex = index;
    this.selectedUser = this.usersList[index];
  }

  onDeleteUser(index: number){
    event?.stopPropagation();
    console.log("gonna delete #"+this.usersList[index]._id);
  }
}
