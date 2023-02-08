import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userID = '';

  constructor(private route:ActivatedRoute) {

    this.route.paramMap.subscribe( paramMap => {
      this.userID = paramMap.get('id');
      console.log('GOT ID:', this.userID);
      
    })

  }

}
