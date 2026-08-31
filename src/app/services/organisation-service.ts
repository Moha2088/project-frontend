import { Injectable } from '@angular/core';
import { UserDTO } from './user-service';
import { ProjectDTO } from './project-service';

export interface OrganisationDTO {
  name: string
  users: UserDTO[]
  projects: ProjectDTO[]

}

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {}
