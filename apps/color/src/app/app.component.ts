import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Color } from '@color-palette/api-interfaces';

@Component({
  selector: 'color-palette-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  GET_RANDOM_COLLORS = '/api/generate-colors';

  code = '';
  isCopied = false;

  colors: Color = { colorCodes: ['']};

  constructor(
    private http: HttpClient,
    private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.generateRandomCollection();
  }

  generateRandomCollection(): void {
    this.isCopied = false;

    this.http.get<Color>(this.GET_RANDOM_COLLORS).subscribe(
      result => this.colors = result
    );
  }

  copyText(textToCopy: string): void {
    this.clipboard.copy(textToCopy);
    this.code = textToCopy;
    this.isCopied = true;
  }

}
