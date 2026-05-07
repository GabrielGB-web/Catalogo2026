import { Product, Category, Brand, Representative, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todos' },
  { id: 'refrigerantes', name: 'Refrigerantes' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'biscoitos', name: 'Biscoitos' },
  { id: 'massas', name: 'Massas' },
  { id: 'temperos', name: 'Temperos' },
  { id: 'laticinios', name: 'Laticínios' },
  { id: 'congelados', name: 'Congelados' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'higiene', name: 'Higiene' },
  { id: 'limpeza', name: 'Limpeza' }
];

export const BRANDS: Brand[] = [
  { id: '1', name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { id: '2', name: 'Pepsi', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg' },
  { id: '3', name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestle_textlogo.svg' },
  { id: '4', name: 'Ypê', logo: 'https://upload.wikimedia.org/wikipedia/pt/2/25/Logotipo_Yp%C3%AA.png' },
  { id: '5', name: 'Bauducco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo_Bauducco.svg/1200px-Logo_Bauducco.svg.png' },
  { id: '6', name: 'Elma Chips', logo: 'https://upload.wikimedia.org/wikipedia/pt/c/c5/Elma-Chips-logo.png' },
  { id: '7', name: 'Lacta', logo: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/Logotipo_Lacta.png' },
  { id: '8', name: 'Italac', logo: 'https://upload.wikimedia.org/wikipedia/pt/2/2c/Italac_logo.png' },
  { id: '9', name: 'Maratá', logo: 'https://marata.com.br/wp-content/themes/marata/assets/img/logo-marata.png' },
  { id: '10', name: 'M. Dias Branco', logo: 'https://mdiasbranco.com.br/wp-content/uploads/2018/06/marca_M_Dias_Branco_horizontal_cor_positiva.png' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Coca-Cola Original 2L',
    brand: 'Coca-Cola',
    category: 'refrigerantes',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    description: 'Refrigerante de cola garrafa pet 2 litros original.',
    price: 8.90,
    promo: true
  },
  {
    id: '2',
    name: 'Batata Lay\'s Clássica 80g',
    brand: 'Elma Chips',
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400',
    description: 'Batata chips crocante sabor clássico.',
    price: 6.50
  },
  {
    id: '3',
    name: 'Leite Condensado Moça',
    brand: 'Nestlé',
    category: 'laticinios',
    image: 'https://images.unsplash.com/photo-1605273499392-db6e870530d8?auto=format&fit=crop&q=80&w=400',
    description: 'Leite condensado Nestlé Moça lata 395g.',
    price: 7.20,
    promo: true
  },
  {
    id: '4',
    name: 'Macarrão Espaguete nº 8',
    brand: 'M. Dias Branco',
    category: 'massas',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400',
    description: 'Macarrão de sêmola com ovos pacote 500g.',
    price: 4.50
  },
  {
    id: '5',
    name: 'Biscoito Recheado Trakinas Mono',
    brand: 'Mondelēz',
    category: 'biscoitos',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400',
    description: 'Biscoito recheado chocolate e baunilha 126g.',
    price: 2.80
  },
  {
    id: '6',
    name: 'Detergente Líquido Maçã',
    brand: 'Ypê',
    category: 'limpeza',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400',
    description: 'Detergente lava-louças Ypê maçã 500ml.',
    price: 2.10
  },
  {
    id: '7',
    name: 'Sabão em Pó Ativo',
    brand: 'Ypê',
    category: 'limpeza',
    image: 'https://media.istockphoto.com/id/1283033575/photo/washing-powder-isolated-on-white.jpg?s=612x612&w=0&k=20&c=U1I-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I1-I=',
    description: 'Sabão em pó Ypê Tixan Ativo 1.6kg.',
    price: 15.90,
    promo: true
  },
  {
    id: '8',
    name: 'Leite UHT Integral',
    brand: 'Italac',
    category: 'laticinios',
    image: 'https://images.unsplash.com/photo-1550583724-125581f77973?auto=format&fit=crop&q=80&w=400',
    description: 'Leite integral UHT Italac caixa 1L.',
    price: 4.80
  }
];

export const REPRESENTATIVES: Representative[] = [
  {
    id: '1',
    name: 'Ricardo Oliveira',
    region: 'Grande São Paulo',
    phone: '(11) 98888-7777',
    whatsapp: '5511988887777',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Ana Paula Silva',
    region: 'Interior de SP / Campinas',
    phone: '(19) 97777-6666',
    whatsapp: '5519977776666',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Marcos Santos',
    region: 'Litoral Paulista',
    phone: '(13) 96666-5555',
    whatsapp: '5513966665555',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'João Barbosa',
    company: 'Supermercado Progresso',
    rating: 5,
    comment: 'A Aliança Distribuidora é nossa parceira há anos. Pontualidade e qualidade indiscutíveis em todas as entregas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Helena Costa',
    company: 'Mini Mercado Doce Lar',
    rating: 5,
    comment: 'O atendimento dos representantes é excelente. Sempre nos trazem as melhores ofertas e novidades do mercado.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  }
];
