
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 font-sans">
      <header className="bg-black text-white p-6 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/FRST%20LOGO%202.jpg" alt="FRST Logo" className="h-10" />
          <nav className="space-x-6 text-base font-medium">
            <a href="#about" className="hover:text-indigo-300 transition">About</a>
            <a href="#services" className="hover:text-indigo-300 transition">Services</a>
            <a href="#available" className="hover:text-indigo-300 transition">Available Homes</a>
            <a href="#contact" className="hover:text-indigo-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative text-white">
        <img src="/FRST%20Banner%204.jpg" alt="Huntsville Banner" className="w-full h-[600px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center px-8 py-14 rounded-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">FRST Properties LLC</h1>
            <p className="text-xl md:text-2xl mb-6 font-light drop-shadow">Veteran-Owned Property Management & Real Estate Investment</p>
            <a href="#contact" className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-600 transition">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About FRST Properties</h2>
          <p className="text-lg text-gray-700 leading-relaxed">FRST Properties is a veteran-owned property management and real estate investing company proudly serving the Rocket City of Huntsville, AL, and surrounding communities. We are committed to putting our clients and tenants first in everything we do.</p>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Available Rental Homes</h3>
              <p className="text-gray-700">Full-service property management for single-family homes, including listings, tenant screening, and support.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Real Estate Investing</h3>
              <p className="text-gray-700">We acquire, renovate, rent, and refinance properties for portfolio growth and passive investor returns.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Tenant Resources</h3>
              <p className="text-gray-700">Access your portal to apply, pay rent, or request maintenance — all online, all convenient.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Sell Your Home</h3>
              <p className="text-gray-700">Looking to sell? We buy homes for cash in any condition. Quick, fair, and hassle-free.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="available" className="py-24 px-6 bg-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Planning a Move?</h2>
          <p className="text-lg mb-10 text-indigo-100">Join our waitlist to be the first to hear about new rental homes and properties for sale.</p>
          <a href="mailto:frstpropertiesllc@gmail.com" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Join the Waitlist</a>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-4 text-lg">Have a property to sell? Need help managing your rental? Let’s connect.</p>
          <p className="text-gray-700 text-lg">Phone: <a href="tel:5154914437" className="underline">(515) 491-4437</a></p>
          <p className="text-gray-700 text-lg">Email: <a href="mailto:frstpropertiesllc@gmail.com" className="underline">frstpropertiesllc@gmail.com</a></p>
        </div>
      </section>

      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} FRST Properties LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
