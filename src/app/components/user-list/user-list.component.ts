import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);
      console.log('users ',this.users)
    });
  }
}
