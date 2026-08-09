import { createContext, useContext, useState, useCallback, useMemo } from "react";

export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिंदी", short: "हिं" },
  { code: "mr", label: "मराठी", short: "मरा" },
];

const en = {
  nav: { about: "About", services: "Services", capabilities: "Capabilities", why: "Why Us", contact: "Contact" },
  common: { getQuote: "Get Quote", contactWhatsapp: "Contact on WhatsApp", whatsappUs: "WhatsApp Us", language: "Language" },
  hero: {
    tagline: "Your Trusted Engineering Partner",
    lines: ["Engineering", "Excellence That", "Moves Industries"],
    sub: "Providing reliable industrial relocation, mechanical, electrical and logistical solutions with precision and expertise.",
    meta: { left: "Est. Pune, India", center: "Mechanical / Electrical / Logistics", right: "Ref. FMS—001" },
  },
  marquee: ["Industrial Relocation", "Machine Shifting", "Plant Setup", "Mechanical Installation", "Electrical Systems", "Heavy Rigging", "Alignment & Commissioning", "Logistics Planning", "Safety First"],
  about: {
    overline: "About Furthmac",
    title: "Trusted engineering, from the ground up.",
    body: "Furthmac Solutions is an industrial relocation and installation partner built on precision engineering. We shift machines, commission plants and wire power systems so your operations restart faster — with safety and quality engineered into every step.",
    label: "Engineering Partnership",
    chapters: [
      { title: "Precision Relocation", body: "We move entire production lines, heavy machinery and complete plants with millimetre-level planning — minimising downtime and protecting your capital assets." },
      { title: "The Engineering Edge", body: "Mechanical, electrical and logistical disciplines under one roof. Our engineers own the full lifecycle: survey, method statement, execution and commissioning." },
      { title: "Safety Protocol", body: "Every project runs on documented risk assessments, certified rigging and zero-compromise safety standards. Quality and on-time delivery are the baseline, not the goal." },
    ],
  },
  services: {
    overline: "What We Do",
    title: "Complete industrial solutions under one partner.",
    intro: "Four disciplines, engineered to work together — from the first survey to final commissioning.",
    cards: {
      relocation: { title: "Industrial Relocation", points: ["Machine shifting", "Plant relocation", "Heavy equipment movement"] },
      mechanical: { title: "Mechanical Solutions", points: ["Machinery installation", "Fabrication", "Alignment & commissioning"] },
      electrical: { title: "Electrical Solutions", points: ["Electrical installation", "Industrial wiring", "Power setup"] },
      logistics: { title: "Logistics Solutions", points: ["Transportation planning", "Heavy material handling", "Project coordination"] },
    },
  },
  capabilities: {
    overline: "Our Capabilities",
    title: "Engineering scope we deliver.",
    intro: "As a newly launched partner, here is the representative scope our team is equipped and ready to execute.",
    cards: [
      { title: "Production Line Shifting", tag: "Relocation", desc: "End-to-end dismantling, transport and re-installation of full production lines." },
      { title: "CNC & Heavy Machine Setup", tag: "Mechanical", desc: "Precision leveling, alignment and commissioning of heavy machine tools." },
      { title: "Plant Power Distribution", tag: "Electrical", desc: "Panel installation, industrial wiring and safe power setup for new plants." },
      { title: "Turnkey Project Logistics", tag: "Logistics", desc: "Route surveys, rigging plans and coordinated heavy material handling." },
    ],
  },
  why: {
    overline: "Why Choose Us",
    title: "A spec sheet you can trust.",
    sub: "We treat reliability as a measurable specification — not a marketing line.",
    items: [
      { title: "Experienced Engineering Team", desc: "Multi-disciplinary engineers who own every method statement." },
      { title: "Safety First Approach", desc: "Documented risk assessments and certified rigging on every site." },
      { title: "Quality Workmanship", desc: "Tolerances checked, aligned and signed off before handover." },
      { title: "On-Time Completion", desc: "Sequenced schedules engineered to minimise plant downtime." },
      { title: "Complete Industrial Solutions", desc: "Mechanical, electrical and logistics under a single partner." },
    ],
  },
  contact: {
    overline: "Start a Project",
    title: "Let’s engineer your next move.",
    fields: { name: "Name *", email: "Email *", phone: "Phone", company: "Company", service: "Service", message: "Message *" },
    ph: { name: "Your name", email: "you@company.com", phone: "+91 ...", company: "Company name", service: "Select a service", message: "Tell us about your machinery, plant or relocation scope..." },
    submit: "Send Enquiry",
    sending: "Sending",
    other: "Other",
    info: { email: "Email", phone: "Phone", address: "Address" },
    whatsapp: "Chat on WhatsApp",
    toastSuccess: "Enquiry sent. Our engineering team will be in touch shortly.",
    toastError: "Something went wrong. Please try WhatsApp or email us directly.",
    toastValidation: "Please fill in your name, email and message.",
  },
  footer: {
    blurb: "Your Trusted Engineering Partner. Industrial relocation, mechanical, electrical & logistics engineering.",
    quickLinks: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

const hi = {
  nav: { about: "परिचय", services: "सेवाएँ", capabilities: "क्षमताएँ", why: "क्यों चुनें", contact: "संपर्क" },
  common: { getQuote: "कोटेशन लें", contactWhatsapp: "व्हाट्सएप पर संपर्क करें", whatsappUs: "हमें व्हाट्सएप करें", language: "भाषा" },
  hero: {
    tagline: "आपका विश्वसनीय इंजीनियरिंग साथी",
    lines: ["अभियांत्रिकी", "उत्कृष्टता जो", "उद्योगों को आगे बढ़ाए"],
    sub: "सटीकता और विशेषज्ञता के साथ विश्वसनीय औद्योगिक स्थानांतरण, यांत्रिक, विद्युत और लॉजिस्टिक समाधान प्रदान करना।",
    meta: { left: "स्थापित पुणे, भारत", center: "यांत्रिक / विद्युत / लॉजिस्टिक्स", right: "Ref. FMS—001" },
  },
  marquee: ["औद्योगिक स्थानांतरण", "मशीन शिफ्टिंग", "प्लांट सेटअप", "यांत्रिक स्थापना", "विद्युत प्रणाली", "भारी रिगिंग", "अलाइनमेंट और कमीशनिंग", "लॉजिस्टिक योजना", "सुरक्षा प्राथमिकता"],
  about: {
    overline: "फर्थमैक के बारे में",
    title: "भरोसेमंद इंजीनियरिंग, नींव से।",
    body: "फर्थमैक सॉल्यूशंस एक औद्योगिक स्थानांतरण और स्थापना साझेदार है जो सटीक इंजीनियरिंग पर आधारित है। हम मशीनें शिफ्ट करते हैं, प्लांट कमीशन करते हैं और पावर सिस्टम वायर करते हैं ताकि आपका संचालन तेज़ी से पुनः शुरू हो — हर चरण में सुरक्षा और गुणवत्ता के साथ।",
    label: "इंजीनियरिंग साझेदारी",
    chapters: [
      { title: "सटीक स्थानांतरण", body: "हम पूरी उत्पादन लाइनें, भारी मशीनरी और संपूर्ण प्लांट को मिलीमीटर-स्तरीय योजना के साथ स्थानांतरित करते हैं — डाउनटाइम कम करते हुए और आपकी पूंजीगत संपत्ति की रक्षा करते हुए।" },
      { title: "इंजीनियरिंग बढ़त", body: "यांत्रिक, विद्युत और लॉजिस्टिक विषय एक ही छत के नीचे। हमारे इंजीनियर पूरे जीवनचक्र के मालिक हैं: सर्वेक्षण, मेथड स्टेटमेंट, निष्पादन और कमीशनिंग।" },
      { title: "सुरक्षा प्रोटोकॉल", body: "हर परियोजना प्रलेखित जोखिम मूल्यांकन, प्रमाणित रिगिंग और शून्य-समझौता सुरक्षा मानकों पर चलती है। गुणवत्ता और समय पर डिलीवरी आधार रेखा हैं, लक्ष्य नहीं।" },
    ],
  },
  services: {
    overline: "हम क्या करते हैं",
    title: "एक ही साझेदार के साथ संपूर्ण औद्योगिक समाधान।",
    intro: "चार विषय, एक साथ काम करने के लिए इंजीनियर किए गए — पहले सर्वेक्षण से अंतिम कमीशनिंग तक।",
    cards: {
      relocation: { title: "औद्योगिक स्थानांतरण", points: ["मशीन शिफ्टिंग", "प्लांट स्थानांतरण", "भारी उपकरण संचलन"] },
      mechanical: { title: "यांत्रिक समाधान", points: ["मशीनरी स्थापना", "फैब्रिकेशन", "अलाइनमेंट और कमीशनिंग"] },
      electrical: { title: "विद्युत समाधान", points: ["विद्युत स्थापना", "औद्योगिक वायरिंग", "पावर सेटअप"] },
      logistics: { title: "लॉजिस्टिक समाधान", points: ["परिवहन योजना", "भारी सामग्री हैंडलिंग", "परियोजना समन्वय"] },
    },
  },
  capabilities: {
    overline: "हमारी क्षमताएँ",
    title: "हम जो इंजीनियरिंग दायरा प्रदान करते हैं।",
    intro: "एक नए लॉन्च किए गए साझेदार के रूप में, यहाँ वह प्रतिनिधि दायरा है जिसे हमारी टीम निष्पादित करने के लिए सुसज्जित और तैयार है।",
    cards: [
      { title: "प्रोडक्शन लाइन शिफ्टिंग", tag: "स्थानांतरण", desc: "संपूर्ण उत्पादन लाइनों का एंड-टू-एंड डिस्मैंटलिंग, परिवहन और पुनः स्थापना।" },
      { title: "CNC और भारी मशीन सेटअप", tag: "यांत्रिक", desc: "भारी मशीन टूल्स की सटीक लेवलिंग, अलाइनमेंट और कमीशनिंग।" },
      { title: "प्लांट पावर वितरण", tag: "विद्युत", desc: "नए प्लांट के लिए पैनल स्थापना, औद्योगिक वायरिंग और सुरक्षित पावर सेटअप।" },
      { title: "टर्नकी प्रोजेक्ट लॉजिस्टिक्स", tag: "लॉजिस्टिक्स", desc: "रूट सर्वेक्षण, रिगिंग योजनाएँ और समन्वित भारी सामग्री हैंडलिंग।" },
    ],
  },
  why: {
    overline: "हमें क्यों चुनें",
    title: "एक स्पेक शीट जिस पर आप भरोसा कर सकें।",
    sub: "हम विश्वसनीयता को एक मापने योग्य विशिष्टता मानते हैं — कोई मार्केटिंग लाइन नहीं।",
    items: [
      { title: "अनुभवी इंजीनियरिंग टीम", desc: "बहु-विषयक इंजीनियर जो हर मेथड स्टेटमेंट के मालिक हैं।" },
      { title: "सुरक्षा-प्रथम दृष्टिकोण", desc: "हर साइट पर प्रलेखित जोखिम मूल्यांकन और प्रमाणित रिगिंग।" },
      { title: "गुणवत्तापूर्ण कारीगरी", desc: "हैंडओवर से पहले सहनशीलता जाँची, अलाइन और साइन-ऑफ की जाती है।" },
      { title: "समय पर पूर्णता", desc: "प्लांट डाउनटाइम कम करने के लिए इंजीनियर किए गए अनुक्रमित शेड्यूल।" },
      { title: "संपूर्ण औद्योगिक समाधान", desc: "एक ही साझेदार के तहत यांत्रिक, विद्युत और लॉजिस्टिक्स।" },
    ],
  },
  contact: {
    overline: "प्रोजेक्ट शुरू करें",
    title: "आइए आपके अगले कदम की इंजीनियरिंग करें।",
    fields: { name: "नाम *", email: "ईमेल *", phone: "फ़ोन", company: "कंपनी", service: "सेवा", message: "संदेश *" },
    ph: { name: "आपका नाम", email: "you@company.com", phone: "+91 ...", company: "कंपनी का नाम", service: "एक सेवा चुनें", message: "अपनी मशीनरी, प्लांट या स्थानांतरण दायरे के बारे में बताएं..." },
    submit: "पूछताछ भेजें",
    sending: "भेज रहे हैं",
    other: "अन्य",
    info: { email: "ईमेल", phone: "फ़ोन", address: "पता" },
    whatsapp: "व्हाट्सएप पर चैट करें",
    toastSuccess: "पूछताछ भेज दी गई। हमारी इंजीनियरिंग टीम शीघ्र संपर्क करेगी।",
    toastError: "कुछ गलत हो गया। कृपया व्हाट्सएप आज़माएं या हमें सीधे ईमेल करें।",
    toastValidation: "कृपया अपना नाम, ईमेल और संदेश भरें।",
  },
  footer: {
    blurb: "आपका विश्वसनीय इंजीनियरिंग साथी। औद्योगिक स्थानांतरण, यांत्रिक, विद्युत और लॉजिस्टिक्स इंजीनियरिंग।",
    quickLinks: "त्वरित लिंक",
    servicesTitle: "सेवाएँ",
    contactTitle: "संपर्क",
    rights: "सर्वाधिकार सुरक्षित।",
    backToTop: "शीर्ष पर जाएँ",
  },
};

const mr = {
  nav: { about: "आमच्याविषयी", services: "सेवा", capabilities: "क्षमता", why: "का निवडावे", contact: "संपर्क" },
  common: { getQuote: "कोटेशन मिळवा", contactWhatsapp: "व्हॉट्सअ‍ॅपवर संपर्क करा", whatsappUs: "आम्हाला व्हॉट्सअ‍ॅप करा", language: "भाषा" },
  hero: {
    tagline: "तुमचा विश्वासू अभियांत्रिकी भागीदार",
    lines: ["अभियांत्रिकी", "उत्कृष्टता जी", "उद्योगांना पुढे नेते"],
    sub: "अचूकता आणि तज्ज्ञतेसह विश्वासार्ह औद्योगिक स्थलांतर, यांत्रिक, विद्युत आणि लॉजिस्टिक उपाय पुरवणे.",
    meta: { left: "स्थापना पुणे, भारत", center: "यांत्रिक / विद्युत / लॉजिस्टिक्स", right: "Ref. FMS—001" },
  },
  marquee: ["औद्योगिक स्थलांतर", "मशीन शिफ्टिंग", "प्लांट सेटअप", "यांत्रिक स्थापना", "विद्युत प्रणाली", "हेवी रिगिंग", "अलाइनमेंट व कमिशनिंग", "लॉजिस्टिक नियोजन", "सुरक्षा प्रथम"],
  about: {
    overline: "फर्थमॅकविषयी",
    title: "विश्वासार्ह अभियांत्रिकी, पायापासून.",
    body: "फर्थमॅक सोल्युशन्स ही अचूक अभियांत्रिकीवर आधारित औद्योगिक स्थलांतर व स्थापना भागीदार आहे. आम्ही मशीन्स हलवतो, प्लांट कमिशन करतो आणि पॉवर सिस्टीम वायर करतो जेणेकरून तुमचे कामकाज लवकर पुन्हा सुरू होईल — प्रत्येक टप्प्यावर सुरक्षा आणि गुणवत्तेसह.",
    label: "अभियांत्रिकी भागीदारी",
    chapters: [
      { title: "अचूक स्थलांतर", body: "आम्ही संपूर्ण उत्पादन लाइन, जड यंत्रसामग्री आणि संपूर्ण प्लांट मिलीमीटर-स्तरीय नियोजनासह हलवतो — डाउनटाइम कमी करून आणि तुमच्या भांडवली मालमत्तेचे संरक्षण करून." },
      { title: "अभियांत्रिकी आघाडी", body: "यांत्रिक, विद्युत आणि लॉजिस्टिक शाखा एकाच छताखाली. आमचे अभियंते संपूर्ण जीवनचक्राची जबाबदारी घेतात: सर्वेक्षण, मेथड स्टेटमेंट, अंमलबजावणी आणि कमिशनिंग." },
      { title: "सुरक्षा प्रोटोकॉल", body: "प्रत्येक प्रकल्प दस्तऐवजीकृत जोखीम मूल्यांकन, प्रमाणित रिगिंग आणि शून्य-तडजोड सुरक्षा मानकांवर चालतो. गुणवत्ता आणि वेळेवर वितरण हे मूलभूत आहे, ध्येय नाही." },
    ],
  },
  services: {
    overline: "आम्ही काय करतो",
    title: "एकाच भागीदारासह संपूर्ण औद्योगिक उपाय.",
    intro: "चार शाखा, एकत्र काम करण्यासाठी अभियांत्रिकी केलेल्या — पहिल्या सर्वेक्षणापासून अंतिम कमिशनिंगपर्यंत.",
    cards: {
      relocation: { title: "औद्योगिक स्थलांतर", points: ["मशीन शिफ्टिंग", "प्लांट स्थलांतर", "जड उपकरण वाहतूक"] },
      mechanical: { title: "यांत्रिक उपाय", points: ["यंत्रसामग्री स्थापना", "फॅब्रिकेशन", "अलाइनमेंट व कमिशनिंग"] },
      electrical: { title: "विद्युत उपाय", points: ["विद्युत स्थापना", "औद्योगिक वायरिंग", "पॉवर सेटअप"] },
      logistics: { title: "लॉजिस्टिक उपाय", points: ["वाहतूक नियोजन", "जड सामग्री हाताळणी", "प्रकल्प समन्वय"] },
    },
  },
  capabilities: {
    overline: "आमच्या क्षमता",
    title: "आम्ही देत असलेली अभियांत्रिकी व्याप्ती.",
    intro: "नव्याने सुरू झालेला भागीदार म्हणून, आमची टीम अंमलात आणण्यासाठी सज्ज असलेली प्रातिनिधिक व्याप्ती येथे आहे.",
    cards: [
      { title: "प्रोडक्शन लाइन शिफ्टिंग", tag: "स्थलांतर", desc: "संपूर्ण उत्पादन लाइनचे एंड-टू-एंड डिसमॅंटलिंग, वाहतूक आणि पुनर्स्थापना." },
      { title: "CNC व जड मशीन सेटअप", tag: "यांत्रिक", desc: "जड मशीन टूल्सचे अचूक लेव्हलिंग, अलाइनमेंट आणि कमिशनिंग." },
      { title: "प्लांट पॉवर वितरण", tag: "विद्युत", desc: "नवीन प्लांटसाठी पॅनेल स्थापना, औद्योगिक वायरिंग आणि सुरक्षित पॉवर सेटअप." },
      { title: "टर्नकी प्रकल्प लॉजिस्टिक्स", tag: "लॉजिस्टिक्स", desc: "रूट सर्वेक्षण, रिगिंग योजना आणि समन्वित जड सामग्री हाताळणी." },
    ],
  },
  why: {
    overline: "आम्हाला का निवडावे",
    title: "तुम्ही विश्वास ठेवू शकाल असे स्पेक शीट.",
    sub: "आम्ही विश्वासार्हतेला मोजता येणारे वैशिष्ट्य मानतो — मार्केटिंग वाक्य नाही.",
    items: [
      { title: "अनुभवी अभियांत्रिकी टीम", desc: "बहु-शाखीय अभियंते जे प्रत्येक मेथड स्टेटमेंटची जबाबदारी घेतात." },
      { title: "सुरक्षा-प्रथम दृष्टिकोन", desc: "प्रत्येक साइटवर दस्तऐवजीकृत जोखीम मूल्यांकन आणि प्रमाणित रिगिंग." },
      { title: "दर्जेदार कारागिरी", desc: "हस्तांतरणापूर्वी सहिष्णुता तपासली, अलाइन आणि साइन-ऑफ केली जाते." },
      { title: "वेळेवर पूर्णता", desc: "प्लांट डाउनटाइम कमी करण्यासाठी अभियांत्रिकी केलेले अनुक्रमित वेळापत्रक." },
      { title: "संपूर्ण औद्योगिक उपाय", desc: "एकाच भागीदाराअंतर्गत यांत्रिक, विद्युत आणि लॉजिस्टिक्स." },
    ],
  },
  contact: {
    overline: "प्रकल्प सुरू करा",
    title: "चला तुमच्या पुढील पावलाची अभियांत्रिकी करूया.",
    fields: { name: "नाव *", email: "ईमेल *", phone: "फोन", company: "कंपनी", service: "सेवा", message: "संदेश *" },
    ph: { name: "तुमचे नाव", email: "you@company.com", phone: "+91 ...", company: "कंपनीचे नाव", service: "सेवा निवडा", message: "तुमच्या यंत्रसामग्री, प्लांट किंवा स्थलांतर व्याप्तीबद्दल सांगा..." },
    submit: "चौकशी पाठवा",
    sending: "पाठवत आहे",
    other: "इतर",
    info: { email: "ईमेल", phone: "फोन", address: "पत्ता" },
    whatsapp: "व्हॉट्सअ‍ॅपवर चॅट करा",
    toastSuccess: "चौकशी पाठवली. आमची अभियांत्रिकी टीम लवकरच संपर्क करेल.",
    toastError: "काहीतरी चूक झाली. कृपया व्हॉट्सअ‍ॅप वापरा किंवा थेट ईमेल करा.",
    toastValidation: "कृपया तुमचे नाव, ईमेल आणि संदेश भरा.",
  },
  footer: {
    blurb: "तुमचा विश्वासू अभियांत्रिकी भागीदार. औद्योगिक स्थलांतर, यांत्रिक, विद्युत आणि लॉजिस्टिक्स अभियांत्रिकी.",
    quickLinks: "जलद दुवे",
    servicesTitle: "सेवा",
    contactTitle: "संपर्क",
    rights: "सर्व हक्क राखीव.",
    backToTop: "वर जा",
  },
};

const TRANSLATIONS = { en, hi, mr };

const I18nContext = createContext({ lang: "en", setLang: () => {}, t: en });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("furthmac-lang") || "en";
  });
  const setLang = useCallback((code) => {
    setLangState(code);
    localStorage.setItem("furthmac-lang", code);
    document.documentElement.setAttribute("lang", code);
  }, []);
  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] || en }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
