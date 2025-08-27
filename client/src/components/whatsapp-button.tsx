import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in getting my driver's license. Can you help?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
      data-testid="button-whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp size={24} />
    </button>
  );
}
