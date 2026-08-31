import { Component, inject } from '@angular/core';
import { Button } from '../../components/ui/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Button],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  router = inject(Router)

  toSignUp() {
    this.router.navigateByUrl("/signup")
  }

  toLogin() {
    this.router.navigate(["/login"])
  }
}
