"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Kaş'ta gece açık oto tamir var mı?",
        answer:
            "Evet, Oto Yasin olarak 7 gün 24 saat hizmet vermekteyiz. Gece yarısı bile acil durum yaşadığınızda bizi arayabilirsiniz. Ekibimiz her zaman hazır.",
    },
    {
        question: "Vize öncesi fren testi ücreti ne kadar?",
        answer:
            "Fren testi ve vize öncesi kapsamlı kontrol için güncel fiyat almak isterseniz WhatsApp üzerinden veya telefon ile iletişime geçebilirsiniz. Aracınızın marka ve modeline göre fiyat değişebilmektedir.",
    },
    {
        question: "Orijinal yedek parça bulabilir misiniz?",
        answer:
            "Evet, tüm binek ve ticari araçlar için orijinal ve OEM yedek parça temin ediyoruz. Castrol, Shell, Total gibi markaların yağlarını, ORS marka rulmanları ve daha birçok kaliteli markayı stoğumuzda bulunduruyoruz.",
    },
    {
        question: "Çekici hizmeti var mı?",
        answer:
            "Evet, Kaş ve çevresinde 7/24 çekici hizmetimiz mevcuttur. Aracınız yolda kaldıysa hemen bizi arayın, en kısa sürede yanınızda olalım.",
    },
    {
        question: "Hangi marka araçlara servis veriyorsunuz?",
        answer:
            "Her marka ve model binek araç ile hafif ticari araçlara hizmet veriyoruz. Renault, Fiat, Volkswagen, Ford, Toyota, Hyundai, Kia ve diğer tüm markalar için bakım ve onarım yapıyoruz.",
    },
    {
        question: "İşçilik garantisi veriyor musunuz?",
        answer:
            "Evet, yaptığımız tüm işçilik ve takılan parçalarda 1 yıl garanti veriyoruz. Herhangi bir sorun yaşarsanız ücretsiz olarak tekrar bakıma alıyoruz.",
    },
];

// FAQPage Schema for SEO
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="sss" className="py-20 md:py-32 bg-[#0A0A0A]">
            {/* Add FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="section-container">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 bg-[#FF3D00]/10 text-[#FF3D00] text-sm font-medium rounded-full border border-[#FF3D00]/20 mb-4"
                        >
                            Sıkça Sorulan Sorular
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Merak Ettikleriniz
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#A1A1AA]"
                        >
                            En çok sorulan soruları sizin için derledik.
                        </motion.p>
                    </div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="border border-white/10 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left bg-[#1C1C1C] hover:bg-[#27272A] transition-colors"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-white font-medium pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#FF3D00] transition-transform duration-200 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="p-5 pt-0 bg-[#1C1C1C]">
                                                <p className="text-[#A1A1AA] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* More Questions CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-[#A1A1AA] mb-4">
                            Başka sorularınız mı var?
                        </p>
                        <a
                            href="https://wa.me/905324934968?text=Merhaba,%20bir%20sorum%20var."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#FF3D00] hover:text-[#FF6B00] font-medium transition-colors"
                        >
                            WhatsApp&apos;tan sorun, hemen cevap verelim
                            <span>→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
