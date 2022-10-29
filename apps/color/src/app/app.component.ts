import { Component, OnInit } from '@angular/core';
import { Color } from '@color-palette/api-interfaces';
import { ColorService } from './services/color.service';

@Component({
  selector: 'color-palette-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  colors: Color = { colorCodes: ['']};

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
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

}
