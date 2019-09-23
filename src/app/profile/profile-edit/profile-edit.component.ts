import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  formFieldAppearance = 'outline';
  credentials: any = {};
  userDetails: any;

  constructor(private auth: AuthenticationService) {
    this.auth.userEmitter
    .subscribe((userDetails) => {
      this.userDetails = userDetails;
      this.credentials.firstName = userDetails.user.firstName;
      this.credentials.lastName = userDetails.user.lastName;
      this.credentials.cin = userDetails.user.cin;
      this.credentials.birthday = userDetails.user.birthday;
      this.credentials.gender = userDetails.user.gender;
      this.credentials.email = userDetails.user.email;
    });
    this.auth.updateUserState();
  }

  ngOnInit() {
  }

  genderSelected(eventData: MatSelectChange) {
    console.log(eventData.value);
    this.credentials.gender = eventData.value;
  }

  updateProfile() {
    console.log(this.credentials);
  }

}
