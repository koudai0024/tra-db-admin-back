export class InputTouristSpotDto {
  name: string;
  description?: string;
  imageUrl: string;
  address?: string;
  businessHours?: string;
  holiday?: string;
  officialUrl?: string;
  remarks?: string;
  place: {
    name: string;
  };
  facilities?: Array<{
    name: string;
  }>;
  tags?: Array<{
    name: string;
  }>;
}
