import { Component, OnInit } from '@angular/core';
import { AdminService, Admin } from '../../../../domains/services/admin.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {
  admins: Admin[] = [];
  loading = false;
  error: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.loading = true;
    this.error = null;
    
    this.adminService.getAdmins(true, 100, 0).subscribe({
      next: (response) => {
        this.admins = response.admins;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка при загрузке списка администраторов';
        this.loading = false;
        console.error('Error loading admins:', err);
      }
    });
  }
}
