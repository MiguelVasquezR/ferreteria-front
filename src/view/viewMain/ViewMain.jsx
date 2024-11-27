import Header from "../../components/Header/Header";
import ferreteriaImage from "../../image/ferreteria.jpg";

const ViewMain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <h1 className="text-3xl font-extrabold text-blue-900 text-center font-mono">
          Bienvenido al sistema de gestión de <span className="text-orange-500">Ferreterías Callejas</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center font-sans">
          A continuación, puedes navegar entre las distintas opciones ubicadas en la parte superior 
          <span className="text-orange-600 font-semibold"> (barra naranja)</span>.
        </p>
        <div className="mt-8">
          <img 
            src={ferreteriaImage} 
            alt="Ferreterías Callejas" 
            className="rounded-lg shadow-lg max-w-xs sm:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewMain;
