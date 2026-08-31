import { Component, signal } from '@angular/core'
import { Button } from '../ui/button/button'
import { AuthService } from '../../services/auth-service'
import { FormControl, FormGroup, Validators } from "@angular/forms"

interface LoginFormParams {
  email: FormControl
  password: FormControl
}

interface LoginResponse {
  token: string
}

@Component({
  selector: 'app-login-form',
  imports: [Button],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  constructor(private authService: AuthService) {}

  email = signal<string>('')
  password = signal<string>('')

  loginForm = new FormGroup<LoginFormParams>({
    email: new FormControl([
      Validators.required,
      Validators.email
    ]),

    password: new FormControl([
      Validators.required,
      Validators.minLength(8),
    ])
  })

  login(event: MouseEvent) {
    event.preventDefault()
    this.authService.login({
      email: this.email(),
      password: this.password()
    })
  }
}
