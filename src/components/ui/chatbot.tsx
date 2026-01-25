"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageCircle,
    X,
    Phone,
    Send,
    MapPin,
    Bot,
    Minus
} from "lucide-react";
import {
    BUSINESS_INFO,
    RESPONSES,
    SERVICES,
    getServiceById,
    generateServiceResponse,
    generateServiceFaqResponse,
    generateMessageId,
    type ChatMessage,
    type QuickReply,
} from "@/lib/chatbot-engine";

// ============================================
// COMPONENT
// ============================================

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showProactiveHint, setShowProactiveHint] = useState(false);

    // Auto-scroll to bottom
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Initialize with greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage(RESPONSES.greeting.message, RESPONSES.greeting.quickReplies);
        }
    }, [isOpen, messages.length]);

    // Proactive hint after 30 seconds
    useEffect(() => {
        if (!hasInteracted) {
            const timer = setTimeout(() => {
                setShowProactiveHint(true);
            }, 30000);
            return () => clearTimeout(timer);
        }
    }, [hasInteracted]);

    // Add bot message with typing effect
    const addBotMessage = useCallback((content: string, quickReplies?: QuickReply[]) => {
        setIsTyping(true);

        // Simulate typing delay (300-800ms per message length segment)
        const typingDelay = Math.min(800, Math.max(400, content.length * 3));

        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                {
                    id: generateMessageId(),
                    type: "bot",
                    content,
                    quickReplies,
                    timestamp: new Date(),
                },
            ]);
        }, typingDelay);
    }, []);

    // Add user message
    const addUserMessage = useCallback((content: string) => {
        setMessages(prev => [
            ...prev,
            {
                id: generateMessageId(),
                type: "user",
                content,
                timestamp: new Date(),
            },
        ]);
        setHasInteracted(true);
        setShowProactiveHint(false);
    }, []);

    // Handle quick reply click
    const handleQuickReply = useCallback((reply: QuickReply) => {
        // Handle actions
        if (reply.action === "call") {
            window.location.href = BUSINESS_INFO.phoneLink;
            return;
        }
        if (reply.action === "whatsapp") {
            window.open(BUSINESS_INFO.whatsappLink + "?text=" + encodeURIComponent("Merhaba, bilgi almak istiyorum."), "_blank");
            return;
        }
        if (reply.action === "maps") {
            window.open(BUSINESS_INFO.mapsLink, "_blank");
            return;
        }

        // Add user message
        addUserMessage(reply.label);

        // Handle navigation
        setTimeout(() => {
            handleConversation(reply.id);
        }, 100);
    }, [addUserMessage]);

    // Main conversation handler
    const handleConversation = useCallback((action: string) => {
        // Check if it's a service
        const service = getServiceById(action);
        if (service) {
            const response = generateServiceResponse(service);
            addBotMessage(response.message, response.quickReplies);
            return;
        }

        // Check if it's a service FAQ
        if (action.startsWith("faq_") && action !== "faq_hours" && action !== "faq_price" && action !== "faq_brands" && action !== "faq_warranty" && action !== "faq_tow" && action !== "faq_appointment") {
            const serviceId = action.replace("faq_", "");
            const svc = getServiceById(serviceId);
            if (svc) {
                const response = generateServiceFaqResponse(svc);
                addBotMessage(response.message, response.quickReplies);
                return;
            }
        }

        // Handle general navigation
        switch (action) {
            case "services":
                addBotMessage(RESPONSES.services_menu.message, [
                    ...RESPONSES.services_menu.quickReplies,
                    { id: "back", label: "Ana Menü", emoji: "🔙" },
                ]);
                break;
            case "faq":
                addBotMessage(RESPONSES.faq_menu.message, [
                    ...RESPONSES.faq_menu.quickReplies,
                    { id: "back", label: "Ana Menü", emoji: "🔙" },
                ]);
                break;
            case "faq_hours":
                addBotMessage(RESPONSES.hours.message, RESPONSES.hours.quickReplies);
                break;
            case "faq_price":
                addBotMessage(RESPONSES.prices.message, RESPONSES.prices.quickReplies);
                break;
            case "faq_brands":
                addBotMessage(RESPONSES.brands.message, RESPONSES.brands.quickReplies);
                break;
            case "faq_warranty":
                addBotMessage(RESPONSES.warranty.message, RESPONSES.warranty.quickReplies);
                break;
            case "faq_tow":
                addBotMessage(RESPONSES.tow_service.message, RESPONSES.tow_service.quickReplies);
                break;
            case "faq_appointment":
                addBotMessage(RESPONSES.appointment.message, RESPONSES.appointment.quickReplies);
                break;
            case "location":
                addBotMessage(RESPONSES.location.message, RESPONSES.location.quickReplies);
                break;
            case "why_us":
                addBotMessage(RESPONSES.why_us.message, RESPONSES.why_us.quickReplies);
                break;
            case "emergency":
                addBotMessage(RESPONSES.emergency.message, RESPONSES.emergency.quickReplies);
                break;
            case "back":
                addBotMessage(RESPONSES.greeting.message, RESPONSES.greeting.quickReplies);
                break;
            default:
                addBotMessage(RESPONSES.fallback.message, RESPONSES.fallback.quickReplies);
        }
    }, [addBotMessage]);

    // Toggle chat
    const toggleChat = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
        setHasInteracted(true);
        setShowProactiveHint(false);
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-50 group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                aria-label="Chatbot'u aç"
            >
                {/* Proactive Hint Bubble */}
                <AnimatePresence>
                    {showProactiveHint && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-[#0A0A0A] text-sm font-medium rounded-xl shadow-lg whitespace-nowrap"
                        >
                            Yardıma mı ihtiyacınız var? 💬
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Button */}
                <motion.div
                    className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FF3D00] to-[#FF6B00] rounded-full flex items-center justify-center shadow-lg shadow-[#FF3D00]/30 hover:shadow-xl hover:shadow-[#FF3D00]/40 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Pulse Ring */}
                    {!isOpen && (
                        <span className="absolute inset-0 rounded-full bg-[#FF3D00] animate-ping opacity-25"></span>
                    )}

                    {/* Icon */}
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[420px] h-[70vh] md:h-[550px] max-h-[600px] bg-[#1C1C1C]/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-[#FF3D00]/10 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#FF3D00] to-[#FF6B00] rounded-xl flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">OTO Yasin Asistan</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                                        <span className="text-[#22C55E] text-xs font-medium">Online - 7/24</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Küçült"
                                >
                                    <Minus className="w-4 h-4 text-[#A1A1AA]" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Kapat"
                                >
                                    <X className="w-4 h-4 text-[#A1A1AA]" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {message.type === "bot" && (
                                        <div className="w-8 h-8 bg-[#FF3D00]/20 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                                            <Bot className="w-4 h-4 text-[#FF3D00]" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[85%] ${message.type === "user"
                                                ? "bg-gradient-to-br from-[#FF3D00] to-[#FF6B00] text-white rounded-2xl rounded-br-md"
                                                : "bg-[#27272A] text-white rounded-2xl rounded-bl-md"
                                            } px-4 py-3`}
                                    >
                                        <div
                                            className="text-sm leading-relaxed whitespace-pre-wrap"
                                            dangerouslySetInnerHTML={{
                                                __html: message.content
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                    .replace(/\n/g, '<br/>')
                                            }}
                                        />

                                        {/* Quick Replies */}
                                        {message.quickReplies && message.quickReplies.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {message.quickReplies.map((reply) => (
                                                    <button
                                                        key={reply.id}
                                                        onClick={() => handleQuickReply(reply)}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-[#FF3D00]/30 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:scale-[1.02]"
                                                    >
                                                        {reply.emoji && <span>{reply.emoji}</span>}
                                                        <span>{reply.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 bg-[#FF3D00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4 text-[#FF3D00]" />
                                    </div>
                                    <div className="bg-[#27272A] rounded-2xl rounded-bl-md px-4 py-3">
                                        <div className="flex items-center gap-1">
                                            <motion.span
                                                className="w-2 h-2 bg-[#A1A1AA] rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                            />
                                            <motion.span
                                                className="w-2 h-2 bg-[#A1A1AA] rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                                            />
                                            <motion.span
                                                className="w-2 h-2 bg-[#A1A1AA] rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer - Quick Actions */}
                        <div className="border-t border-white/10 p-3 bg-[#0A0A0A]/50">
                            <div className="flex items-center gap-2">
                                <a
                                    href={BUSINESS_INFO.phoneLink}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#FF3D00] to-[#FF6B00] text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-[#FF3D00]/30 transition-all duration-200"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Hemen Ara</span>
                                </a>
                                <a
                                    href={BUSINESS_INFO.mapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium rounded-xl transition-all duration-200"
                                >
                                    <MapPin className="w-4 h-4" />
                                    <span>Konum</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Minimized State */}
            <AnimatePresence>
                {isOpen && isMinimized && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={() => setIsMinimized(false)}
                        className="fixed bottom-24 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#1C1C1C]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl hover:border-[#FF3D00]/30 transition-all duration-200"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FF3D00] to-[#FF6B00] rounded-lg flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-white text-sm font-medium">OTO Yasin Asistan</p>
                            <p className="text-[#22C55E] text-xs">Mesaj bekleniyor...</p>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
