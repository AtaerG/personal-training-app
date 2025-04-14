import { Component} from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})

export class LoginComponentComponent {
  username: string | undefined;
  password: string | undefined;
  isInvalid: boolean = false;

  onSubmit(formData: NgForm) {

    if(formData.form.invalid){
      this.isInvalid = true;
      return;
    } else {
      this.isInvalid = false;
    }
    const username = formData.form.value.username;
    const password = formData.form.value.password;
  }
}
