import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Color, ColorEntity } from '@color-palette/api-interfaces';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'color-palette-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  colors: Color = { colorCodes: ['']};
  loggedIn = false;
  i = 1;

  constructor(
    private colorService: ColorService,
    private router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('token');

    if(isLoggedIn != null || isLoggedIn != undefined) {
      this.loggedIn = true;
    } else {
      this.router.navigate(['/sign']);
    }

    this.generateRandomCollection();
  }

  generateRandomCollection(): void {
    this.colorService.generateRandomCollection().subscribe(
      result => { this.colors = result}
    );
  }

  generateRandomRedColorCollection(colorName: string): void {
    this.colorService.generateRandomRedColorCollection(colorName).subscribe(
      result => { this.colors = result}
    );
  }

  saveCurrentPalette(): void {
    const colorEntity: ColorEntity = {
      uuid: localStorage.getItem('token'),
      colorCodes: this.colors.colorCodes,
      name: `Palette ${this.i}`,
      description: `Description of palette ${this.i}`
    };

    this.firebaseService.create(colorEntity);

    this.i++;
  }
}
