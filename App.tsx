
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import EditableText from './components/EditableText';
import ImageEditor from './components/ImageEditor';
import SocialProofPopup from './components/SocialProofPopup';
import DynamicReviews from './components/DynamicReviews';
import Footer from './components/Footer';
import { 
  PRODUCTS as INITIAL_PRODUCTS, 
  PARTNERS, 
  INITIAL_NOTIFICATIONS, 
  INITIAL_REVIEWS 
} from './constants';
import { Product, Review, SocialNotification } from './types';

const App: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeInsight, setActiveInsight] = useState<number | null>(null);
  
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('cjgb_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Product[];
        const allLocal = parsed.every(p => typeof p.image === 'string' && p.image.startsWith('/images'));
        if (allLocal) return parsed;
      } catch (e) {
        // fall through to default
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('cjgb_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        const allLocal = parsed.every(r => typeof r.postImage === 'string' && r.postImage.startsWith('/images'));
        if (allLocal) return parsed;
      } catch (e) {
        // fall through to default
      }
    }
    return INITIAL_REVIEWS;
  });

  const [notifications, setNotifications] = useState<SocialNotification[]>(() => {
    const saved = localStorage.getItem('cjgb_notifications');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  const [heroContent, setHeroContent] = useState(() => {
    const saved = localStorage.getItem('cjgb_hero');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.image === 'string' && parsed.image.startsWith('/images')) {
          return parsed;
        }
      } catch (e) {
        // ignore and fallback
      }
    }
    return {
      badge: '⚡ K-BEVERAGE LIFESTYLE',
      title1: 'CƠN SỐT',
      titleYellow: 'HÀN QUỐC',
      titleItalic: 'ĐÃ ĐẾN VN',
      description: 'Thương hiệu đồ uống dẫn đầu xu hướng năng lượng mới tại Seoul. Trải nghiệm sự sảng khoái thuần khiết và công thức tối ưu cho sức khỏe ngay hôm nay.',
      image: '/images/antihangover.jpg',
      styles: {
        titleYellow: { fontWeight: '900', color: '#000000' }
      }
    };
  });

  const [hypeContent, setHypeContent] = useState(() => {
    const saved = localStorage.getItem('cjgb_hype');
    return saved ? JSON.parse(saved) : {
      titleLine1: 'THƯƠNG HIỆU',
      titleHighlight: '"LÀM MƯA LÀM GIÓ"',
      titleLine3: 'TẠI XỨ KIM CHI',
      cards: [
        {
          stat: '#1',
          title: 'Best Seller tại GS25',
          sub: 'Vượt mặt gã khổng lồ Coca-Cola năm 2018',
          image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop',
          detail: 'Sản phẩm giải rượu của CJGB đã tạo nên một cú hích lịch sử khi trở thành món đồ uống đóng chai bán chạy nhất toàn hệ thống cửa hàng tiện lợi GS25.'
        },
        {
          stat: '40M+',
          title: 'CHAI ĐÃ BÁN',
          sub: 'Dòng giải rượu chiếm lĩnh thị phần nội địa',
          image: 'https://images.unsplash.com/photo-1584286594918-5d45d1b3500d?q=80&w=600&auto=format&fit=crop',
          detail: 'Với hơn 40 triệu chai được tiêu thụ, CJGB không chỉ là một thức uống mà đã trở thành "văn hóa hồi phục" tại Seoul.'
        },
        {
          stat: '300+',
          title: 'THỬ NGHIỆM R&D',
          sub: 'CÔNG THỨC ĐỘC QUYỀN TỐI ƯU SỨC KHỎE',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
          detail: 'Mỗi ngụm CJGB là kết quả của hơn 300 cuộc thử nghiệm lâm sàng, đảm bảo cân bằng hương vị và năng lượng.'
        }
      ]
    };
  });

  useEffect(() => {
    localStorage.setItem('cjgb_products', JSON.stringify(products));
    localStorage.setItem('cjgb_reviews', JSON.stringify(reviews));
    localStorage.setItem('cjgb_notifications', JSON.stringify(notifications));
    localStorage.setItem('cjgb_hero', JSON.stringify(heroContent));
    localStorage.setItem('cjgb_hype', JSON.stringify(hypeContent));
  }, [products, reviews, notifications, heroContent, hypeContent]);

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  return (
    <div className={`antialiased text-black bg-white overflow-x-hidden ${isEditing ? 'editing-mode' : ''}`}>
      <Navbar />
      
      <SocialProofPopup 
        notifications={notifications} 
        isEditing={isEditing} 
        onUpdate={setNotifications}
      />

      {/* Hero Section - Tinh gọn, hiện đại */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50/50 -z-10"></div>
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-cjgb-yellow/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-4 mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 bg-gray-50 px-4 py-2 border border-gray-100">
                <EditableText 
                  value={heroContent.badge} 
                  onChange={(v) => setHeroContent({...heroContent, badge: v})} 
                  isEditing={isEditing} 
                />
              </span>
            </div>
            
            <div className="mb-10 flex flex-col items-start leading-none">
              <EditableText 
                value={heroContent.title1} 
                onChange={(v) => setHeroContent({...heroContent, title1: v})} 
                isEditing={isEditing} 
                tagName="h1"
                className="text-6xl md:text-8xl font-black tracking-tighter"
              />
              <div className="relative mt-2">
                <span className="relative z-10 bg-cjgb-yellow px-6 py-1 inline-block">
                  <EditableText 
                    value={heroContent.titleYellow} 
                    onChange={(v) => setHeroContent({...heroContent, titleYellow: v})} 
                    isEditing={isEditing} 
                    className="text-6xl md:text-8xl font-black tracking-tighter text-black"
                  />
                </span>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-black -z-10"></div>
              </div>
              <div className="mt-4">
                <EditableText 
                  value={heroContent.titleItalic} 
                  onChange={(v) => setHeroContent({...heroContent, titleItalic: v})} 
                  isEditing={isEditing} 
                  className="text-6xl md:text-8xl font-black tracking-tighter text-black"
                />
              </div>
            </div>

            <div className="mb-14 max-w-lg border-l-4 border-black pl-8">
              <EditableText 
                value={heroContent.description} 
                onChange={(v) => setHeroContent({...heroContent, description: v})} 
                isEditing={isEditing} 
                multiline
                tagName="p"
                className="text-lg text-gray-500 font-medium leading-relaxed"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
              <button className="w-full sm:w-auto bg-black text-white px-14 py-6 text-xs font-black uppercase tracking-[0.3em] transition-all hover:bg-cjgb-yellow hover:text-black border-2 border-black">
                KHÁM PHÁ NGAY
              </button>
              
              <div className="flex flex-col items-start space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ưu đãi kết thúc sau:</p>
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* Thu nhỏ khung ảnh */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              <div className="aspect-[4/5] rounded-[15px] overflow-hidden border-[10px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative z-10">
                <ImageEditor 
                  src={heroContent.image} 
                  alt="CJGB Hero Product" 
                  onImageChange={(v) => setHeroContent({...heroContent, image: v})}
                  isEditing={isEditing}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-cjgb-yellow -z-10 rounded-[15px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Brand Authority & Certifications */}
      <section id="authority" className="py-24 bg-zinc-50 border-y-8 border-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block mb-4">Quality & Safety Guarantee</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">BẢO CHỨNG TỪ <span className="text-cjgb-yellow stroke-black">CHUYÊN GIA</span></h2>
            <div className="w-24 h-2 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Proof of Certificates */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'ISO 22000', code: 'Safety Standard', desc: 'Chứng nhận hệ thống quản lý an toàn thực phẩm quốc tế.', icon: '🌍' },
                { title: 'HACCP', code: 'Control Point', desc: 'Kiểm soát chặt chẽ các điểm tới hạn trong quy trình sản xuất.', icon: '🛡️' },
                { title: 'FDA REGISTERED', code: 'US Quality', desc: 'Đạt tiêu chuẩn xuất khẩu và lưu hành tại thị trường Hoa Kỳ.', icon: '🇺🇸' },
                { title: 'K-LABS', code: 'Scientific R&D', desc: 'Hơn 300 cuộc thử nghiệm độc lập tại phòng Lab Hàn Quốc.', icon: '🔬' }
              ].map((cert, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 hover:bg-cjgb-yellow transition-colors group">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{cert.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-1">{cert.title}</h3>
                  <p className="text-[8px] font-black text-gray-400 group-hover:text-black mb-3 uppercase tracking-widest">{cert.code}</p>
                  <p className="text-xs font-bold text-gray-500 group-hover:text-black/80 leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>

            {/* Health & Clinical Benefits */}
            <div className="space-y-8">
              <div className="bg-black text-white p-10 border-4 border-black shadow-[15px_15px_0px_0px_rgba(255,210,0,1)]">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-cjgb-yellow">Vì sao CJGB tốt cho bạn?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 border-b border-white/10 pb-4">
                    <div className="w-8 h-8 rounded-full bg-cjgb-yellow flex-shrink-0"></div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">Thành phần 100% tự nhiên</h4>
                      <p className="text-xs text-gray-400 italic">Không chất bảo quản, không đường hóa học, chỉ chiết xuất từ thảo mộc quý.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 border-b border-white/10 pb-4">
                    <div className="w-8 h-8 rounded-full bg-cjgb-yellow flex-shrink-0"></div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">Công thức tối ưu chuyển hóa</h4>
                      <p className="text-xs text-gray-400 italic">Tăng tốc độ đào thải độc tố và phục hồi năng lượng ở cấp độ tế bào.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cjgb-yellow flex-shrink-0"></div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">Kiểm định bởi CJ Global</h4>
                      <p className="text-xs text-gray-400 italic">Quy trình sản xuất khép kín đạt tiêu chuẩn của tập đoàn thực phẩm lớn nhất HQ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Customer Reviews */}
      <section id="reviews" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block mb-4">Real Experiences</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                GEN Z <span className="text-cjgb-yellow italic">TIN DÙNG</span> <br />
                VÀ LAN TỎA
              </h2>
            </div>
            <div className="bg-gray-100 px-6 py-4 border-2 border-black">
              <p className="text-2xl font-black italic">4.9/5.0</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Average Rating</p>
            </div>
          </div>
          
          <DynamicReviews 
            reviews={reviews} 
            isEditing={isEditing} 
            onDelete={(id) => setReviews(prev => prev.filter(r => r.id !== id))}
          />
        </div>
      </section>

      {/* Partner Marquee */}
      <section className="bg-black py-4 border-y-2 border-cjgb-yellow overflow-hidden whitespace-nowrap relative">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 px-6 text-white font-black italic uppercase tracking-tighter text-3xl">
              {PARTNERS.map((p, idx) => (
                <span key={idx} className="flex items-center space-x-4">
                  <span className="text-cjgb-yellow">CJGB x</span>
                  <span>{p.name}</span>
                  <span className="w-2 h-2 rounded-full bg-white opacity-20"></span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-white border-t-8 border-black">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 italic">Must-Try Items</h2>
          <div className="w-32 h-2 bg-cjgb-yellow mx-auto"></div>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="group relative bg-gray-50 p-6 border-2 border-transparent hover:border-black transition-all flex flex-col h-full min-h-[550px]">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-200 h-64">
                <ImageEditor 
                  src={product.image} 
                  alt={product.name} 
                  onImageChange={(v) => updateProduct(product.id, { image: v })}
                  isEditing={isEditing}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-cjgb-yellow mb-2">
                <EditableText value={product.category} onChange={(v) => updateProduct(product.id, { category: v })} isEditing={isEditing} />
              </p>
              <div className="mb-3 leading-none">
                <EditableText value={product.name} onChange={(v) => updateProduct(product.id, { name: v })} isEditing={isEditing} className="text-2xl font-black uppercase tracking-tighter" />
              </div>
              <div className="mb-6 flex-grow">
                <EditableText value={product.description} onChange={(v) => updateProduct(product.id, { description: v })} isEditing={isEditing} multiline className="text-sm text-gray-500" />
              </div>
              <button className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-cjgb-yellow hover:text-black transition-all border-2 border-black">
                CHỐT ĐƠN NGAY
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Activation Hub / Form Section */}
      <section id="promo" className="py-24 bg-cjgb-yellow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] text-[20vw] font-black italic rotate-12">CJGB</div>
           <div className="absolute bottom-[-10%] left-[-10%] text-[20vw] font-black italic -rotate-12">SEOUL</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-white border-[12px] border-black shadow-[40px_40px_0px_0px_rgba(0,0,0,1)] grid lg:grid-cols-2">
            
            {/* Left Content Column */}
            <div className="p-10 md:p-16 flex flex-col justify-center border-b-[12px] lg:border-b-0 lg:border-r-[12px] border-black bg-white">
              <span className="inline-block bg-black text-cjgb-yellow px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-6 self-start">
                Limited Trial Offer
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                GIA NHẬP <br />
                <span className="text-cjgb-yellow italic stroke-black">CỘNG ĐỒNG</span> <br />
                K-ENERGY
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-cjgb-yellow flex items-center justify-center font-black flex-shrink-0">01</div>
                  <p className="text-sm font-bold text-gray-600">Nhận ngay bộ dùng thử (Trial Kit) giới hạn từ Hàn Quốc.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-cjgb-yellow flex items-center justify-center font-black flex-shrink-0">02</div>
                  <p className="text-sm font-bold text-gray-600">Ưu đãi độc quyền lên đến 50% cho đơn hàng đầu tiên.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-cjgb-yellow flex items-center justify-center font-black flex-shrink-0">03</div>
                  <p className="text-sm font-bold text-gray-600">Cập nhật sớm nhất các dòng sản phẩm "Functional" mới nhất.</p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Họ và Tên</label>
                    <input type="text" placeholder="Tên của bạn..." className="w-full bg-white border-4 border-black p-4 font-bold text-sm focus:bg-cjgb-yellow/10 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Số Điện Thoại</label>
                    <input type="tel" placeholder="09xx xxx xxx" className="w-full bg-white border-4 border-black p-4 font-bold text-sm focus:bg-cjgb-yellow/10 focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Nhận Ưu Đãi</label>
                  <input type="email" placeholder="example@email.com" className="w-full bg-white border-4 border-black p-4 font-bold text-sm focus:bg-cjgb-yellow/10 focus:outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dòng sản phẩm quan tâm (Optional)</label>
                  <select className="w-full bg-white border-4 border-black p-4 font-bold text-sm focus:bg-cjgb-yellow/10 focus:outline-none transition-colors appearance-none">
                    <option value="">Chọn sản phẩm...</option>
                    <option value="hangover">Giải rượu Anti-Hangover</option>
                    <option value="sparkling">Nước trái cây Sparkling Jeju</option>
                    <option value="tea">Trà thảo mộc Functional</option>
                  </select>
                </div>

                <div className="pt-4">
                  <label className="flex items-center space-x-4 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-8 h-8 bg-white border-4 border-black peer-checked:bg-black transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4 text-cjgb-yellow scale-0 peer-checked:scale-100 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                    </div>
                    <span className="text-xs font-black uppercase tracking-tight group-hover:text-black transition-colors">Tôi muốn nhận Trial Kit dùng thử miễn phí!</span>
                  </label>
                </div>

                <button className="w-full bg-black text-white p-6 text-xl font-black uppercase tracking-[0.2em] hover:bg-cjgb-yellow hover:text-black transition-all border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,210,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  KÍCH HOẠT ĐẶC QUYỀN
                </button>
                <p className="text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">Bảo mật thông tin tuyệt đối theo tiêu chuẩn CJGB Global</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Mode Toggle */}
      <Footer />

      <style>{`
        .stroke-black { -webkit-text-stroke: 1.5px black; }
        .editing-mode { background-image: radial-gradient(#FFD200 1.5px, transparent 1.5px); background-size: 30px 30px; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default App;
