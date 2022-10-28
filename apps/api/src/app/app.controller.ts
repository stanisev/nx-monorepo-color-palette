import { Controller, Get } from '@nestjs/common';

import { Color } from '@color-palette/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('generate-colors')
  getColorData(): Color {
    return this.appService.getColorData();
  }
}
