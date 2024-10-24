import { ShoppingCart } from "lucide-react";
import DesktopPicture from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <main className="flex justify-center items-center flex-row min-h-screen bg-cream">
      <section className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-[240px_370px] product-card md:w-[600px] w-[350px] rounded-md overflow-hidden">
        <img className="m-auto" src={DesktopPicture} alt="" />
        <article className="md:p-8 p-6 flex flex-col justify-between bg-pure-white">
          <p className="text-aurometal tracking-[5px] text-base font-body">
            PERFUME
          </p>
          <h1 className="text-[32px] leading-8 font-bold text-gunmetal font-display">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-aurometal text-sm leading-6  font-body">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row items-center gap-5  font-body">
            <h2 className="text-[32px] leading-8 text-aquamarine font-display font-bold">
              $149.99
            </h2>
            <h3 className="text-aurometal line-through  font-body">$169.99</h3>
          </div>
          <button className="text-pure-white font-bold bg-aquamarine hover:bg-aquamarine-hover flex items-center justify-center gap-3 py-4 px-12 rounded-lg font-body">
            <ShoppingCart />
            Add to Cart
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
