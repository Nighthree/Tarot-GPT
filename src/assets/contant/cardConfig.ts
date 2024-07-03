export type CardConfigSchema = {
  name: string;
  image: string;
  proName: string;
  ramdomSort?: number;
  position?: 'upright' | 'reversed';
};

const masterCard: CardConfigSchema[] = [
  { name: '愚者', image: 'm00', proName: 'The Fool' },
  { name: '', image: '', proName: '' },
];

export const cardConfig: CardConfigSchema[] = [...masterCard];

export default cardConfig;
