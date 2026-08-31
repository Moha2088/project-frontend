import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { devEnvironment } from '../../environments/environment.development';

interface LoginDTO {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(dto: LoginDTO) {
    const response = this.http.post(`${devEnvironment.apiUrl}/auth/login`, dto)
    // .subscribe((data) => {
    //   console.log(`------- Data ------- ${data} -------`)
    // })
  }
}