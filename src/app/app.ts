import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navbar } from './components/navbar/navbar'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-frontend')

  constructor(private http: HttpClient) {}
}