import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { computedAsync } from '../../../core/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  authService = inject(AuthService);
  userData = this.login();

  login() {
    return computedAsync(() => this.authService.login());
  }
}
