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
