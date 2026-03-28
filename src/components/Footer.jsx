

export default function Footer() {
  return (
    <footer className="w-full bg-GDark text-gray-200 py-12 px-6 md:px-20">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-GOlive">GreenBite</h1>
          <p className="text-gray-400 text-sm">
            Delicious food delivered straight to your door. Explore our wide
            variety of meals and enjoy quality at every bite.
          </p>
          
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="flex flex-col gap-1 justify-center text-gray-400 text-sm">
            <li>📍 123 Food Street, Faisalabad, PK</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ info@GreenBite.com</li>
          </ul>
        </div>

        

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} GreenBite. All rights reserved.
      </div>
    </footer>
  );
}