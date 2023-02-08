import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userID = '';
  user: User = new User;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: AngularFirestore) {

    this.route.paramMap.subscribe(paramMap => {
      this.userID = paramMap.get('id');
      console.log('GOT ID:', this.userID);
      this.getUser();
    })
  }


  getUser() {
    this
      .firestore
      .collection('users')
      .doc(this.userID)
      .valueChanges()
      .subscribe((user: User) => {
        this.user = new User (user);
        console.log('Retrieved user', this.user);
      })
  }

  editAdress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }

  editUserDetail() {
    this.dialog.open(DialogEditUserComponent);
  }

}
