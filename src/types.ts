export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  price?: number;
  promo?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Representative {
  id: string;
  name: string;
  region: string;
  phone: string;
  whatsapp: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  comment: string;
  image: string;
}
