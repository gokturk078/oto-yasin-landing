export type ServiceIconType = "Wrench" | "Zap" | "Droplet" | "Shield" | "Settings" | "Package";

export interface ServiceData {
    slug: string;
    title: string;
    shortTitle: string;
    icon: ServiceIconType;
    heroDescription: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    features: string[];
    details: {
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    priceRange: string;
    duration: string;
    warranty: string;
}

export const servicesData: ServiceData[] = [
    {
        slug: "mekanik-bakim",
        title: "Mekanik Bakım Servisi",
        shortTitle: "Mekanik Bakım",
        icon: "Wrench",
        heroDescription:
            "Motor, şanzıman, diferansiyel ve tüm mekanik aksamların profesyonel bakım ve onarımı. 20+ yıl tecrübemizle aracınızın performansını en üst seviyede tutuyoruz.",
        metaTitle: "Kaş Mekanik Bakım | Motor Şanzıman Servisi - Oto Yasin",
        metaDescription:
            "Kaş'ta profesyonel mekanik bakım hizmeti. Motor, şanzıman, diferansiyel bakım ve onarım. 7/24 açık, 20+ yıl tecrübe, garanti.",
        keywords: [
            "Kaş motor bakım",
            "Kaş şanzıman tamiri",
            "Kaş mekanik servis",
            "Kaş motor arıza",
            "Kaş diferansiyel",
        ],
        features: [
            "Motor Performans Kontrolü",
            "Şanzıman Bakım ve Onarım",
            "Diferansiyel Servisi",
            "Eksoz Sistemi Kontrolü",
            "Triger Seti Değişimi",
            "Devirdaim Pompası",
            "Termostat Değişimi",
            "Conta Değişimi",
        ],
        details: [
            {
                title: "Kapsamlı Motor Diagnostik",
                description:
                    "En son teknoloji arıza tespit cihazlarıyla motorunuzun tüm sistemlerini analiz ediyoruz. Performans düşüklüğü, yakıt tüketimi artışı veya anormal sesler için hızlı ve doğru teşhis.",
            },
            {
                title: "Şanzıman Uzmanlığı",
                description:
                    "Manuel ve otomatik şanzıman bakım, onarım ve revizyon işlemleri. Vites geçiş problemleri, ses ve titreşim sorunları için kalıcı çözümler.",
            },
            {
                title: "Orijinal ve OEM Parça",
                description:
                    "Tüm onarımlarda orijinal veya OEM kalitesinde yedek parça kullanıyoruz. Her parça garantili ve sertifikalı.",
            },
        ],
        faqs: [
            {
                question: "Motor bakımı ne sıklıkla yaptırılmalı?",
                answer: "Genel olarak her 10.000-15.000 km'de veya yılda bir kez motor bakımı yaptırmanızı öneririz. Ancak aracınızın kullanım koşullarına göre bu süre değişebilir.",
            },
            {
                question: "Şanzıman yağı ne zaman değişmeli?",
                answer: "Manuel şanzımanlarda 60.000-80.000 km'de, otomatik şanzımanlarda 40.000-60.000 km'de yağ değişimi önerilir.",
            },
            {
                question: "Motor arızası teşhisi ne kadar sürer?",
                answer: "Modern diagnostik cihazlarımızla çoğu arıza 30 dakika içinde tespit edilir. Karmaşık sorunlarda detaylı inceleme 1-2 saat sürebilir.",
            },
        ],
        priceRange: "₺500 - ₺5.000",
        duration: "1-4 saat",
        warranty: "1 Yıl İşçilik Garantisi",
    },
    {
        slug: "oto-elektrik",
        title: "Oto Elektrik Servisi",
        shortTitle: "Oto Elektrik",
        icon: "Zap",
        heroDescription:
            "Akü, alternatör, marş motoru ve tüm elektrik sistemlerinin bakım ve onarımı. Acil durumlarda 7/24 yol yardımı hizmeti sunuyoruz.",
        metaTitle: "Kaş Oto Elektrik | Akü Alternatör Servisi - Oto Yasin",
        metaDescription:
            "Kaş'ta 7/24 oto elektrik servisi. Akü değişimi, alternatör tamiri, marş motoru onarımı. Acil yol yardımı, ücretsiz kontrol.",
        keywords: [
            "Kaş oto elektrik",
            "Kaş akü değişimi",
            "Kaş alternatör tamiri",
            "Kaş marş motoru",
            "Kaş acil elektrikçi",
        ],
        features: [
            "Akü Kontrolü ve Değişimi",
            "Alternatör Bakım/Onarım",
            "Marş Motoru Servisi",
            "Far ve Aydınlatma Sistemi",
            "Sigorta Kutusu Tamiri",
            "Kablo Tesisatı Onarımı",
            "Sensör Arıza Tespiti",
            "Klima Elektrik Sistemi",
        ],
        details: [
            {
                title: "Akü Uzmanı",
                description:
                    "Tüm marka ve model araçlar için akü testi, şarj ve değişim hizmeti. Mutlu, Varta, Bosch gibi kaliteli markalarla çalışıyoruz.",
            },
            {
                title: "Alternatör ve Şarj Sistemi",
                description:
                    "Alternatör arıza tespiti, tamir ve komple değişim. Şarj sistemi kontrolü ve optimizasyonu ile aracınızın elektrik sistemini güvence altına alıyoruz.",
            },
            {
                title: "Elektronik Arıza Tespiti",
                description:
                    "Gelişmiş diagnostik cihazlarla tüm elektronik sistemlerin kontrolü. ABS, ESP, airbag ve motor yönetim sistemi arızaları için uzman çözümler.",
            },
        ],
        faqs: [
            {
                question: "Akü ömrü ne kadardır?",
                answer: "Kaliteli bir akü ortalama 3-5 yıl dayanır. Ancak sık kısa mesafe kullanımı, aşırı sıcak veya soğuk hava koşulları ömrü kısaltabilir.",
            },
            {
                question: "Alternatör arızası belirtileri nelerdir?",
                answer: "Akü ikaz lambası yanması, farların karanlması, elektrikli camların yavaş çalışması ve araçta zorlu çalıştırma alternatör sorunlarının belirtileridir.",
            },
            {
                question: "Acil durumda yol yardımı geliyor musunuz?",
                answer: "Evet, Kaş ve çevresinde 7/24 acil yol yardımı hizmeti veriyoruz. Aracınız yolda kaldıysa bizi arayın, 30 dakika içinde yanınızda olalım.",
            },
        ],
        priceRange: "₺200 - ₺2.500",
        duration: "30 dk - 2 saat",
        warranty: "1 Yıl Parça + İşçilik",
    },
    {
        slug: "yag-degisimi",
        title: "Yağ Değişimi Servisi",
        shortTitle: "Yağ Değişimi",
        icon: "Droplet",
        heroDescription:
            "Castrol, Shell, Total gibi premium markalarla profesyonel yağ ve filtre değişimi. Motorunuzun ömrünü uzatın, performansını artırın.",
        metaTitle: "Kaş Yağ Değişimi | Motor Yağı Servisi - Oto Yasin",
        metaDescription:
            "Kaş'ta profesyonel yağ değişimi hizmeti. Castrol, Shell, Total marka yağlar. Filtre değişimi dahil, uygun fiyat, hızlı servis.",
        keywords: [
            "Kaş yağ değişimi",
            "Kaş motor yağı",
            "Kaş filtre değişimi",
            "Kaş Castrol yağ",
            "Kaş yağ servisi",
        ],
        features: [
            "Motor Yağı Değişimi",
            "Yağ Filtresi Değişimi",
            "Hava Filtresi Değişimi",
            "Polen Filtresi Değişimi",
            "Yakıt Filtresi Değişimi",
            "Şanzıman Yağı Değişimi",
            "Diferansiyel Yağı",
            "Direksiyon Hidrolik Yağı",
        ],
        details: [
            {
                title: "Premium Marka Yağlar",
                description:
                    "Castrol, Shell, Total, Mobil gibi dünya çapında güvenilen markalarla çalışıyoruz. Aracınızın üretici önerilerine uygun yağ tipini kullanıyoruz.",
            },
            {
                title: "Komple Filtre Paketi",
                description:
                    "Yağ değişimiyle birlikte tüm filtrelerin kontrolü ve gerekli değişimleri. Motor, hava, polen ve yakıt filtresi tek seferde.",
            },
            {
                title: "Ücretsiz Araç Kontrolü",
                description:
                    "Her yağ değişiminde ücretsiz 15 nokta araç kontrolü yapıyoruz. Fren, lastik, aydınlatma ve sıvı seviyeleri kontrol edilir.",
            },
        ],
        faqs: [
            {
                question: "Yağ değişimi ne sıklıkla yapılmalı?",
                answer: "Genel olarak sentetik yağlarda 10.000-15.000 km, yarı sentetik yağlarda 7.500-10.000 km'de değişim önerilir. Aracınızın el kitabına bakmanızı öneririz.",
            },
            {
                question: "Hangi marka yağları kullanıyorsunuz?",
                answer: "Castrol, Shell, Total, Mobil ve Petrol Ofisi gibi güvenilir markalarla çalışıyoruz. Aracınız için en uygun yağ tipini ve markayı birlikte belirleriz.",
            },
            {
                question: "Yağ değişimi ne kadar sürer?",
                answer: "Standart bir yağ ve filtre değişimi yaklaşık 20-30 dakika sürer. Diğer bakımlarla birlikte yapılırsa süre uzayabilir.",
            },
        ],
        priceRange: "₺400 - ₺1.500",
        duration: "20-30 dakika",
        warranty: "Sonraki Yağ Değişimine Kadar",
    },
    {
        slug: "vize-kontrolu",
        title: "Vize Öncesi Kontrol",
        shortTitle: "Vize Kontrolü",
        icon: "Shield",
        heroDescription:
            "Araç muayenesinden önce kapsamlı kontrol ve gerekli onarımlar. İlk seferde geçmenizi sağlıyoruz, iade garantisiyle.",
        metaTitle: "Kaş Vize Kontrolü | Araç Muayene Hazırlık - Oto Yasin",
        metaDescription:
            "Kaş'ta vize öncesi araç kontrolü. Fren testi, egzoz emisyon, lamba kontrolü. TÜVTÜRK muayenesine hazır araç, geçemezseniz iade.",
        keywords: [
            "Kaş vize kontrolü",
            "Kaş araç muayene",
            "Kaş fren testi",
            "Kaş egzoz emisyon",
            "Kaş TÜVTÜRK hazırlık",
        ],
        features: [
            "Fren Sistemi Testi",
            "Egzoz Emisyon Kontrolü",
            "Far Ayarı ve Aydınlatma",
            "Lastik Durumu Kontrolü",
            "Direksiyon Sistemi",
            "Süspansiyon Kontrolü",
            "Görüş Alanı Kontrolü",
            "Ses ve Sinyal Sistemleri",
        ],
        details: [
            {
                title: "48 Nokta Kontrol",
                description:
                    "TÜVTÜRK standartlarına uygun 48 nokta kapsamlı kontrol. Fren, aydınlatma, egzoz, süspansiyon ve tüm güvenlik sistemleri detaylı incelenir.",
            },
            {
                title: "Anında Onarım",
                description:
                    "Tespit edilen sorunlar için hızlı onarım. Far ayarı, balata değişimi, silecek değişimi gibi küçük işlemler aynı gün tamamlanır.",
            },
            {
                title: "Geçemezsen Ücretsiz",
                description:
                    "Vize kontrolümüzden sonra TÜVTÜRK muayenesinden geçemezseniz, kontrol/tespit edilen arızalar için yapılan masraflar tarafımızca karşılanır.",
            },
        ],
        faqs: [
            {
                question: "Vize kontrolü ne kadar sürer?",
                answer: "Kapsamlı vize kontrolü yaklaşık 45-60 dakika sürer. Onarım gerektiren durumlar tespit edilirse ek süre gerekebilir.",
            },
            {
                question: "Vize kontrolü ücreti ne kadar?",
                answer: "Kontrol ücreti için bizi arayın. Tespit edilen sorunların onarımında kontrol ücreti iade edilir.",
            },
            {
                question: "Hangi kontroller yapılıyor?",
                answer: "TÜVTÜRK standartlarında fren testi, emisyon ölçümü, far ayarı, lastik kontrolü, görüş alanı, ses/sinyal sistemleri ve daha fazlası kontrol edilir.",
            },
        ],
        priceRange: "₺150 - ₺300",
        duration: "45-60 dakika",
        warranty: "Muayene Geçiş Garantisi",
    },
    {
        slug: "alt-takim",
        title: "Alt Takım Bakım ve Onarım",
        shortTitle: "Alt Takım",
        icon: "Settings",
        heroDescription:
            "Amortisör, rot, balata, disk ve tüm süspansiyon sisteminin bakım ve onarımı. Aracınızın yol tutuşunu ve konforunu en üst seviyeye çıkarıyoruz.",
        metaTitle: "Kaş Alt Takım Bakım | Amortisör Rot Balata - Oto Yasin",
        metaDescription:
            "Kaş'ta alt takım bakım ve onarım hizmeti. Amortisör, rot başı, balata, disk değişimi. Süspansiyon tamir, rot ayarı.",
        keywords: [
            "Kaş alt takım",
            "Kaş amortisör değişimi",
            "Kaş rot başı",
            "Kaş balata değişimi",
            "Kaş süspansiyon",
        ],
        features: [
            "Amortisör Kontrolü/Değişimi",
            "Rot Başı ve Rot Kolu",
            "Balata ve Disk Değişimi",
            "Salıncak ve Burç Değişimi",
            "Direksiyon Kutusu",
            "Aks ve Bilyalı Rulman",
            "Yay ve Takoz Değişimi",
            "Rot Ayarı (Düz Ayar)",
        ],
        details: [
            {
                title: "Süspansiyon Uzmanı",
                description:
                    "Amortisör testinden komple süspansiyon revizyonuna kadar tüm işlemler. Aracınızın konforunu ve güvenliğini ön planda tutuyoruz.",
            },
            {
                title: "Fren Sistemi",
                description:
                    "Balata, disk, fren kaliperi ve hidrolik sistem bakımı. Fren performansınızı en üst seviyeye çıkarıyor, güvenliğinizi sağlıyoruz.",
            },
            {
                title: "Rot Ayarı",
                description:
                    "Profesyonel düz ayar cihazıyla rot ayarı. Lastik aşınmasını önleyin, yakıt tasarrufu sağlayın ve düzgün yol tutuşu elde edin.",
            },
        ],
        faqs: [
            {
                question: "Amortisör ne zaman değişmeli?",
                answer: "Amortisörler genellikle 80.000-100.000 km'de yıpranır. Aracınız virajlarda sallanıyor, fren mesafesi uzuyor veya yolda zıplama hissediyorsanız kontrol ettirmenizi öneririz.",
            },
            {
                question: "Balata değişimi ne sıklıkla gerekli?",
                answer: "Kullanım şekline göre değişir. Şehir içi kullanımda 30.000-50.000 km, uzun yol kullanımında 50.000-80.000 km arası balata ömrü beklenir.",
            },
            {
                question: "Rot ayarı neden önemli?",
                answer: "Yanlış rot ayarı lastiklerin eşit olmayan şekilde aşınmasına, yakıt tüketimi artışına ve direksiyon kontrolünün zorlaşmasına neden olur.",
            },
        ],
        priceRange: "₺300 - ₺4.000",
        duration: "1-4 saat",
        warranty: "1 Yıl Parça + İşçilik",
    },
    {
        slug: "yedek-parca",
        title: "Yedek Parça Satış ve Montaj",
        shortTitle: "Yedek Parça",
        icon: "Package",
        heroDescription:
            "Orijinal ve OEM kalitesinde yedek parça satışı ve profesyonel montaj hizmeti. Her marka ve model için geniş parça stoğu.",
        metaTitle: "Kaş Yedek Parça | Orijinal OEM Parça - Oto Yasin",
        metaDescription:
            "Kaş'ta orijinal ve OEM yedek parça satışı. Her marka araç için parça temini. Montaj dahil, garanti.",
        keywords: [
            "Kaş yedek parça",
            "Kaş oto parça",
            "Kaş orijinal parça",
            "Kaş araç parça",
            "Kaş oto aksesuar",
        ],
        features: [
            "Orijinal Yedek Parça",
            "OEM Kalite Parçalar",
            "Motor Parçaları",
            "Kaporta ve Dış Parça",
            "Elektrik ve Elektronik",
            "Fren ve Süspansiyon",
            "Filtre ve Sarf Malzeme",
            "Aydınlatma ve Aksesuar",
        ],
        details: [
            {
                title: "Geniş Parça Ağı",
                description:
                    "Türkiye'nin önde gelen yedek parça tedarikçileriyle çalışıyoruz. Stoğumuzda bulunmayan parçalar 24-48 saat içinde temin edilir.",
            },
            {
                title: "Kalite Garantisi",
                description:
                    "Sadece orijinal veya OEM onaylı parçalar kullanıyoruz. Her parça garanti kapsamında ve sertifikalıdır.",
            },
            {
                title: "Montaj Dahil",
                description:
                    "Satın aldığınız parçaların profesyonel montajını yapıyoruz. İşçilik garantisi tüm montaj işlemleri için geçerlidir.",
            },
        ],
        faqs: [
            {
                question: "Orijinal ve OEM parça farkı nedir?",
                answer: "Orijinal parçalar araç üreticisi tarafından üretilir. OEM parçalar ise aynı üretici tarafından ama farklı markayla satılan parçalardır. Kalite aynıdır, fiyat farkı olabilir.",
            },
            {
                question: "Parça temin süresi ne kadar?",
                answer: "Stoğumuzda bulunan parçalar anında, bulunmayan parçalar genellikle 24-48 saat içinde temin edilir. Nadir parçalar için 3-5 iş günü sürebilir.",
            },
            {
                question: "Parça garantisi var mı?",
                answer: "Evet, tüm parçalarımız en az 1 yıl üretici garantisi kapsamındadır. Montaj işçiliği de 1 yıl garantilidir.",
            },
        ],
        priceRange: "Parçaya göre değişir",
        duration: "Parçaya göre değişir",
        warranty: "1 Yıl Üretici Garantisi",
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map((service) => service.slug);
}
