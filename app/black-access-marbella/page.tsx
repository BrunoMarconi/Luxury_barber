import type { Metadata } from 'next';
import BlackAccessClient from './BlackAccessClient';

export const metadata: Metadata = {
  title: 'Black Access Marbella | Experiencia privada de imagen masculina premium',
  description:
    'Black Access: experiencia privada domingo de imagen masculina premium en Marbella. Diagnóstico capilar y facial, barbería de precisión, cuidado avanzado masculino y continuidad personalizada.',
  keywords: [
    'Black Access Marbella',
    'experiencia privada masculina Marbella',
    'barbería premium Marbella',
    'imagen masculina Marbella',
    'cuidado masculino premium',
    'Alpha Signature Marbella',
    'grooming lujo Marbella',
    'barbero precisión Marbella',
  ],
  openGraph: {
    title: 'Black Access Marbella',
    description:
      'Experiencia privada de imagen masculina premium. Un único turno reservado para trabajar tu imagen con diagnóstico, precisión y dedicación completa.',
    type: 'website',
    url: 'https://www.theprofessionalbarber.es/black-access-marbella',
    images: [
      {
        url: 'https://www.theprofessionalbarber.es/images/og-black-access.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Access Marbella',
      },
    ],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.theprofessionalbarber.es/black-access-marbella',
  },
};

export default function BlackAccessPage() {
  return <BlackAccessClient />;
}
