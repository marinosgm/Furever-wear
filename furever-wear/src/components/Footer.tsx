import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Address */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="assets/logo.png"
              alt="Furever-Wears Logo"
              className="h-20 w-auto mr-2 rounded-lg"
            />
            <span className="text-lg font-bold">Furever-Wears</span>
          </div>
          <p>
            <strong>Address and office hours</strong>
          </p>
          <p>Cyprus, Limassol 4047, Germasogeia, 60 Georgiou A Str.</p>
          <p>Work Schedule:<br />Mon. - Sun.: 9:30 - 19:30</p>
        </div>

        {/* Registered Address */}
        <div>
          <p>
            <strong>Registered address</strong>
          </p>
          <p>Legal Name: Furever-Wears LTD</p>
          <p>Registration Number: HE 123456</p>
          <p>Legal Address: 2 Sokratous Str, Mesa Geitonia 4006 Limassol, Cyprus</p>
        </div>

        {/* Contact & Info */}
        <div>
          <p>
            <strong>We're in touch</strong>
          </p>
          <p>Email: <a href="mailto:info@fureverwears.com" className="underline">info@fureverwears.com</a></p>
          <p>Phone: <a href="tel:+35797423424" className="underline">+357 97 423 424</a></p>
          <p>Work Schedule call-center:<br />Mon. - Sun.: 9:30 - 19:30</p>
          <div className="flex mt-2 space-x-4">
            <a href="#" aria-label="Telegram">
              <img src="/icons/telegram.svg" alt="Telegram" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="WhatsApp">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 mt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:underline">About Company</a>
          <a href="#" className="hover:underline">Shipping and Payment</a>
          <a href="#" className="hover:underline">Exchange and Returns</a>
          <a href="#" className="hover:underline">Contacts</a>
          <a href="#" className="hover:underline">Blog</a>
        </div>
        <div className="flex space-x-4">
          <img src="/icons/visa.svg" alt="Visa" className="h-8 w-auto" />
          <img src="/icons/mastercard.svg" alt="MasterCard" className="h-8 w-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;