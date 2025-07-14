import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/loginService';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login { 
  email: string = '';
  password: string = '';
 

  constructor(private loginServ:LoginService,private router: Router) {}

  // Placeholder for login logic
loginUser() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.loginServ.checkUser(user).subscribe(
  (res: boolean) => {
    if (res) {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid credentials');
    }
  },
  (error) => {
    console.error('Error during login:', error);
  }
);

  }

}
