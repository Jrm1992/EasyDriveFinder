import { colors } from "@/constants";
import { Car } from "@/types/car.interface";

export const generateCarImageUrl = (car: Car, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year, color } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);
  url.searchParams.append('paintId', `${color}`);

  return `${url}`;
} 