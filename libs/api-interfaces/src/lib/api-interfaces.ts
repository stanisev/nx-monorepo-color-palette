export interface Color {
  colorCodes: string[];
}

export interface ColorEntity {
  uuid: string | null;
  name: string | null;
  description: string | null;
  colorCodes: string[] | null;
}
