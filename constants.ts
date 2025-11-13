import type { Order, AppConfig, Client } from './types';
import { OrderStatus } from './types';

export const INITIAL_CLIENTS: Client[] = [
  { id: 1, name: 'Ferretería Central S.L.', cif: 'B12345678', phone: '912 345 678', email: 'compras@ferreteriacentral.es', address: 'Calle Principal 1, 28001 Madrid' },
  { id: 2, name: 'Cuchillería del Norte', cif: 'A87654321', phone: '944 123 456', email: 'pedidos@cuchillerianorte.com', address: 'Avenida Bilbao 20, 48002 Bilbao' },
  { id: 3, name: 'Suministros Industriales Sur S.A.', cif: 'A29876543', phone: '954 987 654', email: 'logistica@suministrossur.es', address: 'Polígono Industrial La Red, 41500 Alcalá de Guadaíra, Sevilla' },
  { id: 4, name: 'Hostelería La Cocina Moderna', cif: 'B98712345', phone: '932 109 876', email: 'proveedores@cocinamoderna.com', address: 'Carrer de Balmes 100, 08008 Barcelona' },
  { id: 5, name: 'Carnicerías El Buen Corte', cif: 'G45678912', phone: '963 555 444', email: 'elbuencorte@email.com', address: 'Plaza del Mercado 5, 46001 Valencia' },
];


export const INITIAL_ORDERS: Order[] = [
  {
    id: '#00101',
    clientId: 5,
    total: 350.50,
    date: '2025-01-07',
    status: OrderStatus.COMPLETED,
    items: [
      { id: 1, code: ' cuch-001', concept: 'Cuchillo de chef 20cm', quantity: 5, price: 45.50, discount: 10 },
      { id: 2, code: 'afil-003', concept: 'Afilador de diamante', quantity: 2, price: 80.00, discount: 15 },
    ],
  },
  {
    id: '#00102',
    clientId: 2,
    total: 895.75,
    date: '2025-01-15',
    status: OrderStatus.MANUAL_REVIEW,
    items: [
      { id: 1, code: 'NVJ-200', concept: 'Navaja Plegable Acero 200mm', quantity: 10, price: 15.00, discount: 10 },
      { id: 2, code: 'SRA-120', concept: 'Sierra de corte manual 120cm', quantity: 3, price: 150.25, discount: 15 },
      { id: 3, code: 'UTL-G50', concept: 'Guantes Anticorte (Pack 50)', quantity: 2, price: 25.50, discount: 5 },
    ],
  },
  {
    id: '#00103',
    clientId: 4,
    total: 230.00,
    date: '2025-02-03',
    status: OrderStatus.FACTUSOL_ERROR,
    items: [
       { id: 1, code: 'TIJ-C01', concept: 'Tijeras de cocina profesionales', quantity: 10, price: 23.00, discount: 0 },
    ],
  },
    {
    id: '#00104',
    clientId: 1,
    total: 1250.00,
    date: '2025-02-19',
    status: OrderStatus.PENDING_FACTUSOL,
    items: [
      { id: 1, code: 'DISC-250', concept: 'Disco de sierra 250mm', quantity: 20, price: 62.50, discount: 0 },
    ],
  },
  {
    id: '#00105',
    clientId: 3,
    total: 1800.00,
    date: '2025-03-06',
    status: OrderStatus.COMPLETED,
    items: [
        { id: 1, code: 'SRA-IND', concept: 'Sierra industrial de cinta', quantity: 1, price: 1800, discount: 0 },
    ],
  },
];

export const INITIAL_CONFIG: AppConfig = {
  factusolUrl: 'https://api.factusol.es/v1/albaran',
  factusolClientId: 'tu_client_id_factusol',
  factusolClientSecret: '********',
  sttEndpoint: 'https://api.stt.proveedor.com/v2/convert',
  smtpUser: 'albaranes@marcelinocalvo.com',
  discounts: {
    option1: 5,
    option2: 10,
    option3: 15,
  },
};