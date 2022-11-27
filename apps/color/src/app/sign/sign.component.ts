import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-palette-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {}

  signInWithGoogle(): void {
    this.firebaseService.signWithGoogle();
  }
}
