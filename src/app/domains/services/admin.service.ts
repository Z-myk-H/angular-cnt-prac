import { Observable } from 'rxjs';
import { Admin } from '../modules/admin.model';
import { HttpClientModule } from '@angular/common/http'

type TAdminId = string | number;
interface IAdminData {
  login?: string;
  password?: string;
  isActive?: boolean;
  birthday?: string | Date;
}

@NgModule({ 
  imports: [HttpClientModule] 
})
export class AdminService {
  constructor() {}

  getAdminById(adminId: TAdminId): Observable<Admin> {
    return this.http.get('/admins');
  }

  updateAdmin<T>(adminId: string | number, newData: IAdminData): Observable<T> {
    return this.http.put(`/admins/${id}`, newData);
  }

  createAdmin<T>(data: Admin): Observable<T> {
    return this.http.post(`/admins`, data);
  }

  deleteAdmin<T>(id: TAdminId): Observable<T>{
    return this.http.delete(`/admins/${id}`);
  }
}
