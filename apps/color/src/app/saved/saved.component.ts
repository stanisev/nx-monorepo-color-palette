import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'color-palette-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  data: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getPalette();
  }

  getPalette() {
    this.firebaseService.get().subscribe(
     result => {
      this.data = result;
      console.log(result);
     }
    );
  }

  deletePalette(id: string): void {
    this.firebaseService.delete(id);
    this.getPalette();
  }

  update(id: string, name: string, description: string): void {
    const nameValue = (<HTMLInputElement>document.getElementById(name)).value;
    const descriptionValue = (<HTMLInputElement>document.getElementById(description)).value;
    this.firebaseService.update(id, nameValue, descriptionValue);
  }
}
