import { Injectable } from '@nestjs/common';
import { Color } from '@color-palette/api-interfaces';
import { COLORS_CONFIG } from './configuration/colors.const';

@Injectable()
export class AppService {
  getColorData(): Color {
    const colorCodesData = [];

    for (let i = 0; i < COLORS_CONFIG.COLORS_PALLETE_SIZE.FIVE; i++) {
      colorCodesData.push(this.generateHexValues());
    }

    return { colorCodes: colorCodesData };
  }

  getColorDataByName(color: string): Color {
    if (COLORS_CONFIG.RED_COLOR_SCHEME.NAME === color) {
      const colorCodesRedData = [];

    for (let i = 0; i < COLORS_CONFIG.COLORS_PALLETE_SIZE.FIVE; i++) {
      const redValue = Math.random() * (COLORS_CONFIG.RED_COLOR_SCHEME.RED_VALUE_MAX - COLORS_CONFIG.RED_COLOR_SCHEME.RED_VALUE_MIN) + COLORS_CONFIG.RED_COLOR_SCHEME.RED_VALUE_MIN;
      const greenValue = Math.random() * (COLORS_CONFIG.RED_COLOR_SCHEME.GREEN_VALUE_MAX - COLORS_CONFIG.RED_COLOR_SCHEME.GREEN_VALUE_MIN) + COLORS_CONFIG.RED_COLOR_SCHEME.GREEN_VALUE_MIN;
      const blueValue = Math.random() * (COLORS_CONFIG.RED_COLOR_SCHEME.BLUE_VALUE_MAX - COLORS_CONFIG.RED_COLOR_SCHEME.BLUE_VALUE_MIN) + COLORS_CONFIG.RED_COLOR_SCHEME.BLUE_VALUE_MIN;

      colorCodesRedData.push(this.rgbToHex(Math.floor(redValue), Math.floor(greenValue), Math.floor(blueValue)));
    }

      return { colorCodes:  colorCodesRedData};
    }
  }

  private rgbToHex(red: number, green: number, blue: number): string {
    return ("#" + this.componentToHex(red) + this.componentToHex(green) + this.componentToHex(blue)).toLocaleUpperCase();
  }

  private componentToHex(value: number): string {
    const hex = value.toString(COLORS_CONFIG.HEX.VALUES.length);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private generateHexValues(): string {
    let hex = COLORS_CONFIG.HEX.STARTED_IDENTIFIER;

    for (let i = 0; i < COLORS_CONFIG.HEX.SIZE; i++){
      const index = Math.floor(Math.random() * COLORS_CONFIG.HEX.VALUES.length)
      hex += COLORS_CONFIG.HEX.VALUES[index];
    }

    return hex;
  }
}
