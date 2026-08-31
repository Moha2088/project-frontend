import { Injectable } from '@angular/core';
import { UserDTO } from './user-service';

interface CreateProjectDTO {
  name: string
  startDate: Date
  endDate: Date
}

enum State {
  PENDING,
  ONGOING,
  FINISHED
}

export interface ProjectDTO {
  id: number
  name: string
  projectState: State
  created: Date
  startDate: Date 
  endDate: Date
  users: UserDTO[]
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  
}
