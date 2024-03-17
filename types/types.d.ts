interface Billboard {
  id: number;
  name: string;
  imageUrl: string;
}

interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
