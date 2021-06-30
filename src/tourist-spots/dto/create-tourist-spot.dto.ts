export class CreateTouristSpotDto {
  name: string;
  description?: string;
  imageUrl: string;
  address?: string;
  businessHours?: string;
  holiday?: string;
  officialUrl?: string;
  remarks?: string;
  place: string;
  facilities?: Array<string>;
  tags?: Array<string>;
}
