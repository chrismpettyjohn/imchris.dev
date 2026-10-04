export interface Brand {
  name: string;
  // Omit for brands shown as a text wordmark only.
  src?: string;
  // Rendered box in px; the image is cropped to it to trim padding baked into the file.
  width?: number;
  height?: number;
  // Dark marks need flipping on the dark theme.
  invertOnDark?: boolean;
  // Shown next to marks that don't include the company name, or alone when there is no mark.
  label?: string;
}

export const brands: Brand[] = [
  { name: 'Nike', src: '/img/nike.png', width: 120, height: 44, invertOnDark: true },
  { name: 'Apple', src: '/img/apple.png', width: 32, height: 46, invertOnDark: true },
  { name: 'Walmart', src: '/img/walmart.svg', width: 140, height: 27, invertOnDark: true },
  { name: 'Mars', src: '/img/mars.svg', width: 112, height: 33, invertOnDark: true },
  { name: "M&M's", src: '/img/mms.png', width: 88, height: 37 },
  { name: 'Ethel M', label: 'Ethel M' },
  { name: 'SureSteps', src: '/img/suresteps.jpeg', width: 32, height: 32, label: 'SureSteps' },
];
