
export interface TextStyles {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecoration?: string;
  fontFamily?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  usp: string[];
  image: string;
  isHero?: boolean;
  styles?: {
    name?: TextStyles;
    description?: TextStyles;
  };
}

export interface Partner {
  name: string;
  logo: string;
}

export interface SocialNotification {
  id: string;
  message: string;
  timeAgo: string;
}

export interface Review {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  rating: number;
  platform: 'instagram' | 'tiktok' | 'facebook';
  postImage?: string;
  likes?: string;
}