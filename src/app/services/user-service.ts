import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { OrganisationDTO } from './organisation-service';
import { ProjectDTO } from './project-service';

import { toast } from '@spartan-ng/brain/sonner';

interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDTO {
  firstName: string;
  lastName: string;
  email: string;
  organisation: OrganisationDTO;
  projects: ProjectDTO[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = process.env['URL'];

  createUser(dto: CreateUserDTO) {
    return this.http.post<void>(`${this.apiUrl}/users`, dto);
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
}
