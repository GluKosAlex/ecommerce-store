interface IBillboard {
  id: number;
  label: string;
  imageUrl: string;
}

interface ICategory {
  id: string;
  name: string;
  billboard: Billboard;
}

interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  price: string;
  isFeatured: boolean;
  size: ISize;
  color: IColor;
  images: IImage[];
}

interface IImage {
  id: string;
  url: string;
}

interface IColor {
  id: string;
  name: string;
  value: string;
}

interface ISize {
  id: string;
  name: string;
  value: string;
}
