/**
 * OTO Yasin AI Chatbot Engine
 * Ultra-professional knowledge base and conversation logic
 */

// ============================================
// TYPES
// ============================================

export type UserIntent =
    | 'greeting'
    | 'service_inquiry'
    | 'price_inquiry'
    | 'location_inquiry'
    | 'hours_inquiry'
    | 'emergency'
    | 'appointment'
    | 'specific_problem'
    | 'comparison'
    | 'warranty'
    | 'tow_service'
    | 'brands'
    | 'fallback';

export interface QuickReply {
    id: string;
    label: string;
    emoji?: string;
    action?: 'call' | 'whatsapp' | 'maps' | 'navigate';
    navigateTo?: string;
}

export interface ChatMessage {
    id: string;
    type: 'bot' | 'user';
    content: string;
    quickReplies?: QuickReply[];
    timestamp: Date;
}

export interface ServiceInfo {
    id: string;
    title: string;
    shortTitle: string;
    emoji: string;
    description: string;
    features: string[];
    priceRange: string;
    duration: string;
    warranty: string;
    faqs: { question: string; answer: string }[];
}

// ============================================
// BUSINESS DATA
// ============================================

export const BUSINESS_INFO = {
    name: "OTO Yasin",
    fullName: "OTO Yasin - Kaş Oto Tamir ve Bakım Merkezi",
    phone: "0532 493 49 68",
    phoneLink: "tel:+905324934968",
    whatsappLink: "https://wa.me/905324934968",
    address: "Ova, Atatürk Bulvarı Güneş Sokak No 134/4, 07974 Kaş/Antalya",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Oto+Yasin+Atatürk+Bulvarı+Güneş+Sokak+Kaş&travelmode=driving",
    hours: "7/24 Açık",
    experience: "20+ yıl",
    customers: "5000+",
    googleRating: "4.9",
    googleReviews: "43+",
    serviceArea: ["Kaş", "Kalkan", "Demre", "Finike"],
    foundedYear: 2004,
};

export const SERVICES: ServiceInfo[] = [
    {
        id: "mekanik-bakim",
        title: "Mekanik Bakım Servisi",
        shortTitle: "Mekanik Bakım",
        emoji: "🔧",
        description: "Motor, şanzıman, diferansiyel ve tüm mekanik aksamların profesyonel bakım ve onarımı.",
        features: ["Motor Performans Kontrolü", "Şanzıman Bakım", "Diferansiyel Servisi", "Triger Seti Değişimi", "Conta Değişimi"],
        priceRange: "₺500 - ₺5.000",
        duration: "1-4 saat",
        warranty: "1 Yıl İşçilik Garantisi",
        faqs: [
            { question: "Motor bakımı ne sıklıkla yaptırılmalı?", answer: "Her 10.000-15.000 km'de veya yılda bir kez motor bakımı öneririz." },
            { question: "Şanzıman yağı ne zaman değişmeli?", answer: "Manuel şanzımanlarda 60.000-80.000 km'de, otomatik şanzımanlarda 40.000-60.000 km'de değişim önerilir." },
            { question: "Motor arızası teşhisi ne kadar sürer?", answer: "Modern diagnostik cihazlarımızla çoğu arıza 30 dakika içinde tespit edilir." },
        ],
    },
    {
        id: "oto-elektrik",
        title: "Oto Elektrik Servisi",
        shortTitle: "Oto Elektrik",
        emoji: "⚡",
        description: "Akü, alternatör, marş motoru ve tüm elektrik sistemlerinin bakım ve onarımı.",
        features: ["Akü Kontrolü/Değişimi", "Alternatör Bakım", "Marş Motoru Servisi", "Far/Aydınlatma", "Sensör Arıza Tespiti"],
        priceRange: "₺200 - ₺2.500",
        duration: "30 dk - 2 saat",
        warranty: "1 Yıl Parça + İşçilik",
        faqs: [
            { question: "Akü ömrü ne kadardır?", answer: "Kaliteli bir akü ortalama 3-5 yıl dayanır. Sık kısa mesafe kullanımı ömrü kısaltabilir." },
            { question: "Alternatör arızası belirtileri nelerdir?", answer: "Akü ikaz lambası yanması, farların kararması, elektrikli camların yavaş çalışması belirtilerdir." },
            { question: "Acil durumda yol yardımı geliyor musunuz?", answer: "Evet, Kaş ve çevresinde 7/24 acil yol yardımı veriyoruz. 30 dakika içinde yanınızda oluruz!" },
        ],
    },
    {
        id: "yag-degisimi",
        title: "Yağ Değişimi Servisi",
        shortTitle: "Yağ Değişimi",
        emoji: "💧",
        description: "Castrol, Shell, Total gibi premium markalarla profesyonel yağ ve filtre değişimi.",
        features: ["Motor Yağı Değişimi", "Yağ Filtresi", "Hava Filtresi", "Polen Filtresi", "Ücretsiz 15 Nokta Kontrol"],
        priceRange: "₺400 - ₺1.500",
        duration: "20-30 dakika",
        warranty: "Sonraki Değişime Kadar",
        faqs: [
            { question: "Yağ değişimi ne sıklıkla yapılmalı?", answer: "Sentetik yağlarda 10.000-15.000 km, yarı sentetik yağlarda 7.500-10.000 km'de değişim önerilir." },
            { question: "Hangi marka yağları kullanıyorsunuz?", answer: "Castrol, Shell, Total, Mobil gibi premium markalarla çalışıyoruz." },
            { question: "Yağ değişimi ne kadar sürer?", answer: "Standart yağ ve filtre değişimi yaklaşık 20-30 dakika sürer." },
        ],
    },
    {
        id: "vize-kontrolu",
        title: "Vize Öncesi Kontrol",
        shortTitle: "Vize Kontrolü",
        emoji: "🛡️",
        description: "Araç muayenesinden önce kapsamlı kontrol ve gerekli onarımlar. İlk seferde geçmenizi sağlıyoruz!",
        features: ["48 Nokta Kontrol", "Fren Sistemi Testi", "Egzoz Emisyon", "Far Ayarı", "Lastik Kontrolü"],
        priceRange: "₺150 - ₺300",
        duration: "45-60 dakika",
        warranty: "Muayene Geçiş Garantisi",
        faqs: [
            { question: "Vize kontrolü ne kadar sürer?", answer: "Kapsamlı vize kontrolü yaklaşık 45-60 dakika sürer." },
            { question: "Vize kontrolü ücreti ne kadar?", answer: "Kontrol ücreti için bizi arayın. Onarım yaptırırsanız kontrol ücreti iade edilir." },
            { question: "Hangi kontroller yapılıyor?", answer: "TÜVTÜRK standartlarında fren testi, emisyon, far ayarı, lastik kontrolü ve daha fazlası." },
        ],
    },
    {
        id: "alt-takim",
        title: "Alt Takım Bakım ve Onarım",
        shortTitle: "Alt Takım",
        emoji: "⚙️",
        description: "Amortisör, rot, balata, disk ve tüm süspansiyon sisteminin bakım ve onarımı.",
        features: ["Amortisör Kontrolü", "Rot Başı/Kolu", "Balata/Disk Değişimi", "Süspansiyon", "Rot Ayarı"],
        priceRange: "₺300 - ₺4.000",
        duration: "1-4 saat",
        warranty: "1 Yıl Parça + İşçilik",
        faqs: [
            { question: "Amortisör ne zaman değişmeli?", answer: "Amortisörler genellikle 80.000-100.000 km'de yıpranır. Virajlarda sallanma veya fren mesafesi uzaması belirtidir." },
            { question: "Balata değişimi ne sıklıkla gerekli?", answer: "Şehir içi kullanımda 30.000-50.000 km, uzun yolda 50.000-80.000 km arası balata ömrü beklenir." },
            { question: "Rot ayarı neden önemli?", answer: "Yanlış rot ayarı lastiklerin düzensiz aşınmasına ve yakıt tüketimi artışına neden olur." },
        ],
    },
    {
        id: "yedek-parca",
        title: "Yedek Parça Satış ve Montaj",
        shortTitle: "Yedek Parça",
        emoji: "📦",
        description: "Orijinal ve OEM kalitesinde yedek parça satışı ve profesyonel montaj hizmeti.",
        features: ["Orijinal Parçalar", "OEM Kalite", "Hızlı Temin (24-48 saat)", "Montaj Dahil", "1 Yıl Garanti"],
        priceRange: "Parçaya göre değişir",
        duration: "Parçaya göre değişir",
        warranty: "1 Yıl Üretici Garantisi",
        faqs: [
            { question: "Orijinal ve OEM parça farkı nedir?", answer: "Orijinal parçalar araç üreticisi tarafından, OEM parçalar aynı üretici tarafından farklı markayla satılır. Kalite aynıdır." },
            { question: "Parça temin süresi ne kadar?", answer: "Stoktaki parçalar anında, olmayanlar genellikle 24-48 saat içinde temin edilir." },
            { question: "Parça garantisi var mı?", answer: "Evet, tüm parçalarımız en az 1 yıl üretici garantisi kapsamındadır." },
        ],
    },
];

export const GENERAL_FAQS = [
    { question: "Kaş'ta gece açık oto tamir var mı?", answer: "Evet! OTO Yasin olarak 7 gün 24 saat hizmet veriyoruz. Gece yarısı bile arayabilirsiniz." },
    { question: "Çekici hizmeti var mı?", answer: "Evet, Kaş ve çevresinde 7/24 çekici hizmetimiz mevcut. 30 dakika içinde yanınızda oluruz!" },
    { question: "Hangi marka araçlara servis veriyorsunuz?", answer: "Her marka ve model binek araç ile hafif ticari araçlara hizmet veriyoruz. Renault, Fiat, VW, Ford, Toyota, Hyundai ve daha fazlası!" },
    { question: "İşçilik garantisi veriyor musunuz?", answer: "Evet, tüm işçilik ve parçalarda 1 yıl garanti veriyoruz. Sorun yaşarsanız ücretsiz tekrar bakıma alıyoruz." },
    { question: "Fiyatlar nasıl belirleniyor?", answer: "Her araç farklı olduğu için kesin fiyatı aracınızı gördükten sonra söylüyoruz. Ama WhatsApp'tan sorarsanız tahmini fiyat verebiliriz!" },
    { question: "Randevu almak gerekli mi?", answer: "Randevusuz da gelebilirsiniz ama randevu alırsanız beklemeden hizmet alırsınız. WhatsApp'tan randevu alabilirsiniz." },
];

export const CUSTOMER_REVIEWS = [
    { name: "Altug Tuncay", text: "Ustanın bir eli var 3 saat içinde arabayı çalışır hale getirdi. Süper süper ötesi!", rating: 5 },
    { name: "Yilmaz Koramaz", text: "Arızayı hemen tespit etti, ücret konusunda bilgi verdi. Dürüst esnaf.", rating: 5 },
    { name: "Unsal Erdem", text: "İşin ehli bir usta ve aynı zamanda dürüst. Uygun fiyatları ile tavsiye ederim.", rating: 5 },
    { name: "Engin Katirci", text: "Deneyimli bir mekanikçi ve elektronikçi. Yağ değişimi uygun fiyatlı!", rating: 5 },
];

// ============================================
// CONVERSATION TEMPLATES
// ============================================

export const RESPONSES = {
    greeting: {
        message: `Merhaba! Ben OTO Yasin'in dijital asistanıyım. 🔧

Kaş'ın **20 yıldır güvenilen** oto tamir merkezi olarak **7/24** yanınızdayız.

Size nasıl yardımcı olabilirim?`,
        quickReplies: [
            { id: "services", label: "Hizmetlerimiz", emoji: "🔧" },
            { id: "faq", label: "Soru Sorun", emoji: "❓" },
            { id: "call", label: "Hemen Ara", emoji: "📞", action: "call" as const },
            { id: "location", label: "Yol Tarifi", emoji: "📍", action: "maps" as const },
        ],
    },

    services_menu: {
        message: `Hangi hizmet hakkında bilgi almak istersiniz? 🔧`,
        quickReplies: SERVICES.map(s => ({
            id: s.id,
            label: s.shortTitle,
            emoji: s.emoji,
            navigateTo: s.id,
        })),
    },

    faq_menu: {
        message: `Ne hakkında soru sormak istersiniz? ❓`,
        quickReplies: [
            { id: "faq_hours", label: "Çalışma Saatleri", emoji: "🕒" },
            { id: "faq_price", label: "Fiyatlar", emoji: "💰" },
            { id: "faq_brands", label: "Araç Markaları", emoji: "🚗" },
            { id: "faq_warranty", label: "Garanti", emoji: "✅" },
            { id: "faq_tow", label: "Çekici Hizmeti", emoji: "🚨" },
            { id: "faq_appointment", label: "Randevu", emoji: "📅" },
        ],
    },

    emergency: {
        message: `Acil durumlar için hemen buradayız! 🚨

Usta Yasin **7/24 ulaşılabilir** durumda.
Kaş ve çevresinde **30 dakika içinde** yanınızdayız.

📞 Hemen Ara: **${BUSINESS_INFO.phone}**`,
        quickReplies: [
            { id: "call", label: "Acil Ara", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Gönder", emoji: "💬", action: "whatsapp" as const },
            { id: "location", label: "Konumumu Paylaş", emoji: "📍", action: "maps" as const },
        ],
    },

    why_us: {
        message: `Neden OTO Yasin? İşte rakamlar: 📊

⭐ **${BUSINESS_INFO.googleRating}/5** Google puanı (${BUSINESS_INFO.googleReviews} değerlendirme)
🔧 **${BUSINESS_INFO.experience}** tecrübe
👥 **${BUSINESS_INFO.customers}** mutlu müşteri
✅ **1 yıl** garanti (işçilik + parça)
🕒 **7/24** açık

> "${CUSTOMER_REVIEWS[2].text}"
> — ${CUSTOMER_REVIEWS[2].name}`,
        quickReplies: [
            { id: "call", label: "Randevu Al", emoji: "📞", action: "call" as const },
            { id: "location", label: "Ziyaret Et", emoji: "📍", action: "maps" as const },
        ],
    },

    location: {
        message: `📍 **Adresimiz:**
${BUSINESS_INFO.address}

🕒 **Çalışma Saatleri:** ${BUSINESS_INFO.hours}

Google Maps'te yol tarifi almak için aşağıdaki butona tıklayın!`,
        quickReplies: [
            { id: "maps", label: "Yol Tarifi Al", emoji: "🗺️", action: "maps" as const },
            { id: "call", label: "Arayın Yönlendirelim", emoji: "📞", action: "call" as const },
        ],
    },

    hours: {
        message: `🕒 **Çalışma Saatlerimiz:**

**Pazartesi - Pazar: 7/24 Açık!**

Evet, doğru okudunuz! Gece gündüz demeden, hafta sonu dahil her zaman açığız.

Acil durumlar için anında müdahale ediyoruz. 🚨`,
        quickReplies: [
            { id: "call", label: "Hemen Ara", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Yaz", emoji: "💬", action: "whatsapp" as const },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },

    prices: {
        message: `💰 **Fiyat Bilgisi:**

Her araç farklı olduğu için kesin fiyatı aracınızı gördükten sonra söylüyoruz. Ama size bir fikir vereyim:

📌 Yağ Değişimi: ₺400 - ₺1.500
📌 Vize Kontrolü: ₺150 - ₺300
📌 Akü Değişimi: ₺200 - ₺2.500
📌 Balata Değişimi: ₺300 - ₺1.000

WhatsApp'tan aracınızın fotoğrafını gönderin, **5 dakika içinde** fiyat verelim! 📸`,
        quickReplies: [
            { id: "whatsapp", label: "WhatsApp'tan Fiyat Al", emoji: "💬", action: "whatsapp" as const },
            { id: "call", label: "Telefonla Sor", emoji: "📞", action: "call" as const },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },

    brands: {
        message: `🚗 **Hizmet Verdiğimiz Markalar:**

Her marka ve model binek araç ile hafif ticari araçlara hizmet veriyoruz:

✅ Renault, Fiat, Dacia
✅ Volkswagen, Audi, Skoda, Seat
✅ Ford, Opel, Peugeot, Citroen
✅ Toyota, Honda, Hyundai, Kia
✅ Mercedes, BMW, Volvo
✅ Ve daha fazlası...

Aracınız ne olursa olsun, tecrübemizle çözüm buluruz! 💪`,
        quickReplies: [
            { id: "services", label: "Hizmetlere Bak", emoji: "🔧" },
            { id: "call", label: "Randevu Al", emoji: "📞", action: "call" as const },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },

    warranty: {
        message: `✅ **Garanti Politikamız:**

OTO Yasin'de tüm işlemler garantili!

🔧 **İşçilik Garantisi:** 1 yıl
📦 **Parça Garantisi:** 1 yıl (üretici garantisi)
🛡️ **Vize Kontrolü:** Muayene geçiş garantisi

Herhangi bir sorun yaşarsanız ücretsiz tekrar bakıma alıyoruz. Güvenle hizmet alın! 👍`,
        quickReplies: [
            { id: "call", label: "Randevu Al", emoji: "📞", action: "call" as const },
            { id: "services", label: "Hizmetleri Gör", emoji: "🔧" },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },

    tow_service: {
        message: `🚨 **Çekici Hizmeti:**

Aracınız yolda mı kaldı? Panik yapmayın!

✅ Kaş ve çevresi (Kalkan, Demre, Finike)
✅ **7/24** hizmet
✅ **30 dakika içinde** yanınızda
✅ Uygun fiyat

Hemen bizi arayın, yardıma geliyoruz! 🏃‍♂️`,
        quickReplies: [
            { id: "call", label: "Hemen Ara", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Konum Gönder", emoji: "💬", action: "whatsapp" as const },
        ],
    },

    appointment: {
        message: `📅 **Randevu Almak İçin:**

Randevusuz da gelebilirsiniz ama randevu alırsanız **beklemeden** hizmet alırsınız!

**Randevu Yolları:**
📞 Telefon: ${BUSINESS_INFO.phone}
💬 WhatsApp: Hızlı ve kolay!

WhatsApp'tan aracınızın markası, modeli ve ne hizmet istediğinizi yazın, size uygun zamanı ayarlayalım. ⏰`,
        quickReplies: [
            { id: "whatsapp", label: "WhatsApp'tan Randevu", emoji: "💬", action: "whatsapp" as const },
            { id: "call", label: "Telefonla Randevu", emoji: "📞", action: "call" as const },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },

    fallback: {
        message: `Hmm, tam olarak anlayamadım. 🤔

Size daha iyi yardımcı olabilmem için aşağıdaki seçeneklerden birini tercih edebilir veya doğrudan bizi arayabilirsiniz!`,
        quickReplies: [
            { id: "services", label: "Hizmetlerimiz", emoji: "🔧" },
            { id: "faq", label: "Sık Sorulan Sorular", emoji: "❓" },
            { id: "call", label: "Hemen Ara", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Yaz", emoji: "💬", action: "whatsapp" as const },
        ],
    },

    service_cta: {
        message: `Hemen randevu alın veya detaylı bilgi için bizi arayın! 📞`,
        quickReplies: [
            { id: "call", label: "Hemen Ara", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Yaz", emoji: "💬", action: "whatsapp" as const },
            { id: "services", label: "Diğer Hizmetler", emoji: "🔧" },
            { id: "back", label: "Ana Menü", emoji: "🔙" },
        ],
    },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getServiceById(id: string): ServiceInfo | undefined {
    return SERVICES.find(s => s.id === id);
}

export function generateServiceResponse(service: ServiceInfo): { message: string; quickReplies: QuickReply[] } {
    const featuresText = service.features.slice(0, 4).map(f => `✅ ${f}`).join('\n');

    return {
        message: `${service.emoji} **${service.title}**

${service.description}

**Neler Yapıyoruz:**
${featuresText}

💰 **Fiyat:** ${service.priceRange}
⏱️ **Süre:** ${service.duration}
✅ **Garanti:** ${service.warranty}

${CUSTOMER_REVIEWS[Math.floor(Math.random() * CUSTOMER_REVIEWS.length)].text.substring(0, 60)}...`,
        quickReplies: [
            { id: `faq_${service.id}`, label: "Sık Sorulan Sorular", emoji: "❓" },
            { id: "call", label: "Fiyat Al", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp Yaz", emoji: "💬", action: "whatsapp" as const },
            { id: "services", label: "Diğer Hizmetler", emoji: "🔙" },
        ],
    };
}

export function generateServiceFaqResponse(service: ServiceInfo): { message: string; quickReplies: QuickReply[] } {
    const faqsText = service.faqs.map((faq, i) =>
        `**${i + 1}. ${faq.question}**\n${faq.answer}`
    ).join('\n\n');

    return {
        message: `❓ **${service.shortTitle} - Sık Sorulan Sorular**

${faqsText}

Başka sorunuz var mı?`,
        quickReplies: [
            { id: "call", label: "Telefonla Sor", emoji: "📞", action: "call" as const },
            { id: "whatsapp", label: "WhatsApp'tan Sor", emoji: "💬", action: "whatsapp" as const },
            { id: service.id, label: `${service.shortTitle}'a Dön`, emoji: "🔙" },
            { id: "back", label: "Ana Menü", emoji: "🏠" },
        ],
    };
}

export function generateMessageId(): string {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
