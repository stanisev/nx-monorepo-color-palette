import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '@color-palette/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ColorService {

  GET_RANDOM_COLLORS = '/api/generate-colors';

constructor(private http: HttpClient) { }

  generateRandomCollection(): Observable<Color> {
    return this.http.get<Color>(this.GET_RANDOM_COLLORS);
  }

  generateRandomRedColorCollection(colorName: string): Observable<Color> {
    return this.http.get<Color>(`${this.GET_RANDOM_COLLORS}/${colorName}`);
  }
}

