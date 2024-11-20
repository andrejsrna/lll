export default function ContactSection() {
    return (
      <section className="bg-gray-100 py-10 px-5">
        <img
            src="/logo.jpg" // Uprav cestu k logu podľa projektu
            alt="Logo firmy"
            className="w-8 h-auto m-auto mb-16"
          />
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Kontaktné a fakturačné údaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kontaktné údaje */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Kontaktné údaje</h3>
              <p className="text-gray-700">
                <span className="font-semibold">Názov firmy:</span> Enroll Limited s.r.o.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Telefón:</span> +421 914 230 321
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> ahoj@andrejsrna.sk
              </p>
            </div>
  
            {/* Fakturačné údaje */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Fakturačné údaje</h3>
              <p className="text-gray-700">
                <span className="font-semibold">IČO:</span> 54072638
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">DIČ:</span> 2121638728
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Zápis v ORSR:</span> Vložka 157956/B, Bratislava III
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Adresa:</span> 1. mája 33, 900 84 Báhoň
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }