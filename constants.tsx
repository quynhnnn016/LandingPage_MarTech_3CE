
import { Product, Partner, SocialNotification, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'anti-hangover',
    name: 'CJGB Anti-Hangover',
    category: 'Relief Drink',
    description: 'Thức uống giải rượu công thức độc quyền với hơn 40 triệu chai đã được bán ra tại Hàn Quốc.',
    usp: ['Thảo dược quý hiếm', 'Hiệu quả tức thì', 'Công thức độc quyền'],
    image: '/images/product_hangover.png',
    isHero: true
  },
  {
    id: 'hallabong',
    name: 'Jeju Hallabong Sparkling',
    category: 'Fruit Sparkling',
    description: 'Vị cam đặc trưng từ đảo Jeju, mang lại trải nghiệm bùng nổ hương vị trái cây.',
    usp: ['Cam Jeju nguyên chất', 'Gas cực mạnh', 'Sảng khoái tức thì'],
    image: '/images/product_jeju.png'
  },
  {
    id: 'red-ginseng',
    name: 'Honey Red Ginseng',
    category: 'Healthy Tea',
    description: 'Sự kết hợp hoàn hảo giữa Nhân sâm đỏ cao cấp, mật ong tinh khiết và lê Hàn Quốc.',
    usp: ['Tăng cường đề kháng', 'Mật ong tự nhiên', 'Năng lượng bền bỉ'],
    image: '/images/product_honey.png'
  },
  {
    id: 'watermelon',
    name: 'Taengmo Ban Sparkling',
    category: 'Trendy Twist',
    description: 'Biến tấu hiện đại từ thức uống dưa hấu nổi tiếng, mang vibe kỳ nghỉ vào từng ngụm.',
    usp: ['Hương dưa hấu thanh mát', 'Vibe Summer', 'Ít calo'],
    image: '/images/product_taengmo.png'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'GS25', logo: 'GS25' },
  { name: '7-Eleven', logo: '7-Eleven' },
  { name: 'Hyundai', logo: 'Hyundai' },
  { name: 'Emart24', logo: 'Emart24' },
  { name: 'Mini Stop', logo: 'Mini Stop' }
];

export const INITIAL_NOTIFICATIONS: SocialNotification[] = [
  { id: '1', message: 'Minh Anh vừa nhận Trial Kit tại Hà Nội', timeAgo: '2 phút trước' },
  { id: '2', message: '1,240 đã trải nghiệm sản phẩm. Còn bạn thì sao?', timeAgo: 'Vừa xong' },
  { id: '3', message: 'Quốc Tuấn vừa chốt đơn Anti-Hangover', timeAgo: '5 phút trước' }
];

export const INITIAL_REVIEWS: Review[] = [
  { 
    id: 'r1', 
    author: 'Linh Chi', 
    handle: '@linhchi_vibe',
    avatar: 'https://i.pravatar.cc/150?u=linhchi', 
    content: 'Vị Jeju Hallabong đỉnh nóc kịch trần luôn mng ơi! Chụp ảnh cực vibe 🍊 Một ngụm là thấy mùa hè đảo Jeju ngay trong lòng SG luôn!', 
    rating: 5,
    platform: 'instagram',
    postImage: '/images/review-1.png',
    likes: '1.2k'
  },
  { 
    id: 'r2', 
    author: 'Trần Nam', 
    handle: '@nam.workhard',
    avatar: 'https://i.pravatar.cc/150?u=trannam', 
    content: 'Dân văn phòng must-try dòng giải rượu nhé, sáng dậy tỉnh táo như chưa từng say. Cứu cánh cho những buổi tiếp khách đêm muộn.', 
    rating: 5,
    platform: 'tiktok',
    postImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=400&h=500&auto=format&fit=crop',
    likes: '850'
  },
  { 
    id: 'r3', 
    author: 'Hà My', 
    handle: '@hamy_energy',
    avatar: 'https://i.pravatar.cc/150?u=hamy', 
    content: 'Bao bì cháy máy, cầm trên tay là thấy năng lượng rồi! Thử dòng Red Ginseng vị thanh cực kỳ, không hề bị hắc sâm tí nào.', 
    rating: 5,
    platform: 'instagram',
    postImage: '/images/review-3.jpg',
    likes: '2.4k'
  }
];