import "./WhatsAppButton.css";

const WHATSAPP_URL =
  "https://wa.me/919112220491?text=Hello%20MILES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Message MILES on WhatsApp at +91 91122 20491"
      title="Chat with MILES on WhatsApp"
    >
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.05 3A12.9 12.9 0 0 0 5.1 22.73L3.38 29l6.42-1.68A12.94 12.94 0 1 0 16.05 3Zm0 23.7a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-3.8 1 1.01-3.71-.25-.39a10.74 10.74 0 1 1 8.89 4.83Zm5.89-8.04c-.32-.16-1.91-.94-2.21-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.18.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6a9.67 9.67 0 0 1-1.79-2.22c-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.22 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.46.21 2.01.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
