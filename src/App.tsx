import "./App.css";
import { 
  FaHome, 
  FaHeart, 
  FaBoxes, 
  FaBuilding, 
  FaBrain, 
  FaUsers,
  FaUser,
  FaIdCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaClipboardList,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaPaperPlane,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaChevronUp,
  FaChevronDown,
  FaGraduationCap,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Logo from "../public/logo-horizontal-negro.png"
import FotoPelaez from "../public/juan-carlos-edit.jpg"
import FotoCortes from "../public/isabel.jpg"

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [openFAQ, setOpenFAQ] = useState(1); // Para controlar qué FAQ está abierta
  const [formData, setFormData] = useState({
    // Paso 1: Información Personal
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    
    // Paso 2: Ubicación
    ubicacionMocoa: '',
    direccionActual: '',
    
    // Paso 3: Afectación
    tipoAfectacion: '',
    familiaresAfectados: '',
    descripcionDanos: '',
    ayudaRecibida: '',
    
    // Paso 4: Autorizaciones
    autorizacionDatos: false,
    declaracionJuramento: false
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
    alert('¡Formulario enviado exitosamente! Un equipo jurídico revisará tu caso y se pondrá en contacto contigo para asesorarte sobre los siguientes pasos.');
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.nombre && formData.cedula && formData.telefono;
      case 2:
        return formData.ubicacionMocoa;
      case 3:
        return formData.tipoAfectacion && formData.descripcionDanos;
      case 4:
        return formData.autorizacionDatos && formData.declaracionJuramento;
      default:
        return false;
    }
  };

  const toggleFAQ = (faqNumber: number) => {
    setOpenFAQ(openFAQ === faqNumber ? 0 : faqNumber);
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              step < currentStep 
                ? 'bg-emerald-600 text-white' 
                : step === currentStep 
                ? 'bg-[#08a99c] text-white' 
                : 'bg-gray-300 text-gray-600'
            }`}>
              {step < currentStep ? <FaCheck /> : step}
            </div>
            {step < totalSteps && (
              <div className={`w-16 h-1 ${
                step < currentStep ? 'bg-emerald-600' : 'bg-gray-300'
              }`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStepTitle = () => {
    const titles = {
      1: "Información Personal",
      2: "Ubicación y Residencia",
      3: "Detalles de la Afectación",
      4: "Autorizaciones y Envío"
    };
    return titles[currentStep as keyof typeof titles];
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Información Personal
      </h3>
      
      {/* Nombre completo */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaUser />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => handleInputChange('nombre', e.target.value)}
            placeholder="Escribe tu nombre completo"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Número de cédula */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaIdCard />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de cédula *
          </label>
          <input
            type="text"
            value={formData.cedula}
            onChange={(e) => handleInputChange('cedula', e.target.value)}
            placeholder="Número de documento de identidad"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Teléfono de contacto */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaPhone />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono de contacto *
          </label>
          <input
            type="tel"
            value={formData.telefono}
            onChange={(e) => handleInputChange('telefono', e.target.value)}
            placeholder="Número donde podamos contactarte"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Correo electrónico */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaEnvelope />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico (opcional)
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Ubicación y Residencia
      </h3>
      
      {/* Dónde vivías en Mocoa */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaMapMarkerAlt />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Dónde vivías en Mocoa en abril de 2017? *
          </label>
          <input
            type="text"
            value={formData.ubicacionMocoa}
            onChange={(e) => handleInputChange('ubicacionMocoa', e.target.value)}
            placeholder="Dirección, barrio o vereda donde vivías"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Dirección actual */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaHome />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dirección actual de residencia
          </label>
          <input
            type="text"
            value={formData.direccionActual}
            onChange={(e) => handleInputChange('direccionActual', e.target.value)}
            placeholder="¿Dónde vives actualmente?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Detalles de la Afectación
      </h3>
      
      {/* Cómo fuiste afectado */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaExclamationTriangle />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Cómo fuiste afectado? *
          </label>
          <select 
            value={formData.tipoAfectacion}
            onChange={(e) => handleInputChange('tipoAfectacion', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
            required
          >
            <option value="">Selecciona el tipo de afectación principal</option>
            <option value="vivienda">Perdí mi vivienda</option>
            <option value="familiares">Perdí familiares</option>
            <option value="enseres">Perdí enseres y pertenencias</option>
            <option value="negocio">Perdí mi negocio o empleo</option>
            <option value="salud">Sufrí daños físicos o psicológicos</option>
            <option value="familiar">Soy familiar de víctima</option>
            <option value="multiple">Múltiples afectaciones</option>
          </select>
        </div>
      </div>

      {/* Familiares afectados */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaUsers />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Cuántos familiares fueron afectados?
          </label>
          <input
            type="number"
            value={formData.familiaresAfectados}
            onChange={(e) => handleInputChange('familiaresAfectados', e.target.value)}
            placeholder="Número de familiares afectados"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Descripción de daños */}
      <div className="flex items-start space-x-4">
        <div className="text-[#08a99c] text-xl mt-3">
          <FaClipboardList />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe brevemente los daños sufridos *
          </label>
          <textarea
            rows={4}
            value={formData.descripcionDanos}
            onChange={(e) => handleInputChange('descripcionDanos', e.target.value)}
            placeholder="Cuéntanos qué perdiste o cómo fuiste afectado. Ejemplo: Mi casa quedó completamente destruida, perdí todos mis muebles y documentos..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300 resize-none"
            required
          ></textarea>
        </div>
      </div>

      {/* Ayuda o compensación */}
      <div className="flex items-center space-x-4">
        <div className="text-[#08a99c] text-xl">
          <FaHandHoldingUsd />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Has recibido algún tipo de ayuda o compensación?
          </label>
          <select 
            value={formData.ayudaRecibida}
            onChange={(e) => handleInputChange('ayudaRecibida', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08a99c] focus:border-transparent transition-all duration-300"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Sí, he recibido ayuda</option>
            <option value="parcial">Sí, pero solo parcial</option>
            <option value="no">No, no he recibido nada</option>
            <option value="no-se">No estoy seguro</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Autorizaciones y Envío
      </h3>
      
      {/* Protección de datos */}
      <div className="bg-green-100 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="text-green-600 text-xl mt-1">
            <FaShieldAlt />
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-2">
              Protección de tus datos personales
            </h4>
            <p className="text-green-700 text-sm">
              Tu información será tratada conforme a la Ley 1581 de 2012 de Protección de Datos Personales. Solo será usada para gestionar tu reparación como víctima. Tienes derecho a conocer, actualizar y rectificar tus datos en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Casillas de verificación */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="datos-personales"
            checked={formData.autorizacionDatos}
            onChange={(e) => handleInputChange('autorizacionDatos', e.target.checked)}
            className="mt-1 h-4 w-4 text-[#08a99c] focus:ring-[#08a99c] border-gray-300 rounded"
            required
          />
          <label htmlFor="datos-personales" className="text-sm text-gray-700">
            Autorizo el tratamiento de mis datos personales para gestionar mi reparación como víctima de la tragedia de Mocoa, conforme a la Ley 1581 de 2012. *
          </label>
        </div>
        
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="declaracion"
            checked={formData.declaracionJuramento}
            onChange={(e) => handleInputChange('declaracionJuramento', e.target.checked)}
            className="mt-1 h-4 w-4 text-[#08a99c] focus:ring-[#08a99c] border-gray-300 rounded"
            required
          />
          <label htmlFor="declaracion" className="text-sm text-gray-700">
            Declaro bajo la gravedad del juramento que la información suministrada es veraz y que fui víctima de la tragedia de Mocoa del 1 de abril de 2017. *
          </label>
        </div>
      </div>

      {/* Resumen del formulario */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-800 mb-3">Resumen de tu registro:</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p><strong>Nombre:</strong> {formData.nombre}</p>
          <p><strong>Cédula:</strong> {formData.cedula}</p>
          <p><strong>Teléfono:</strong> {formData.telefono}</p>
          <p><strong>Tipo de afectación:</strong> {formData.tipoAfectacion}</p>
        </div>
      </div>

      {/* Nota importante sobre el servicio gratuito */}
      <div className="bg-emerald-50 border-2 border-emerald-400 rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <FaCheckCircle className="text-emerald-600 text-lg" />
          <h4 className="font-bold text-emerald-800 text-base">Servicio Completamente Gratuito</h4>
        </div>
        <p className="text-emerald-700 text-sm mb-2">
          <span className="font-bold">Cortés Rueda Abogados</span> es la compañía oficialmente designada para llevar estos casos de manera <span className="font-bold text-emerald-600">COMPLETAMENTE GRATUITA</span>.
        </p>
        <p className="text-emerald-600 text-xs font-semibold">
          ⚠️ Recuerde: Si alguien le pide dinero por este servicio, está siendo estafado.
        </p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <>
      {/* Banner Flotante de Advertencia */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#08a99c] to-teal-700 text-white py-3 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-4 text-center">
            <FaExclamationTriangle className="text-amber-400 text-xl flex-shrink-0" />
            <div className="flex-1">
              <p className="font-bold text-lg">
                <span className="text-teal-200">Cortés Rueda Abogados</span> - Servicio <span className="text-emerald-400 font-bold">COMPLETAMENTE GRATUITO</span> para víctimas de Mocoa
              </p>
              <p className="text-sm text-teal-100">
                <span className="font-bold">NO SE DEJE ENGAÑAR:</span> Si alguien le pide dinero, está siendo estafado
              </p>
            </div>
            <FaExclamationTriangle className="text-amber-400 text-xl flex-shrink-0" />
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16 px-4 flex items-center justify-center" style={{ paddingTop: '120px' }}>
        <div className="container mx-auto text-center space-y-4">
          <img src={Logo} alt="Logo" className="w-auto max-w-screen mx-auto " />
          <hr className="my-8 max-w-[300px] w-full mx-auto text-teal-900" />
          <h1 className="text-6xl font-bold text-teal-900">
            ¿Fuiste víctima de la tragedia de Mocoa?
          </h1>
          <h2 className="text-4xl font-bold text-teal-700">Tienes derecho a reparación</h2>
          <p className="text-lg text-gray-700">
            Si en abril de 2017 perdiste tu hogar, familiares, enseres o fuiste
            afectado de cualquier manera por la avalancha de Mocoa, la ley
            colombiana te protege y tienes derecho a una reparación integral. No
            importa si ya pasaron años, tu derecho sigue vigente.
          </p>

          <p className="text-2xl font-bold text-teal-800">
            Regístrate completamente gratis para recibir información sobre el
            proceso de reparación y conoce tus derechos. Nuestro equipo jurídico se pondrá en contacto contigo para asesorarte sobre los siguientes pasos.
          </p>
                      <button 
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#08a99c] hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg cursor-pointer"
            >
              REGISTRARME GRATIS
            </button>
        </div>
      </section>

      {/* Sección de Advertencia Importante - Servicio Gratuito */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-100 backdrop-blur-sm rounded-lg p-6 border-2 border-white/10 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaExclamationTriangle className="text-amber-400 text-2xl" />
              <h3 className="text-teal-700 font-bold text-xl">SERVICIO COMPLETAMENTE GRATUITO</h3>
            </div>
            <p className="text-slate-700 font--semibold text-lg mb-3">
              <span className="text-teal-700 font-bold">Cortés Rueda Abogados</span> es la firma oficialmente designada para representar a las víctimas de Mocoa.
            </p>
            <p className="text-slate-700 font-bold">
              ⚠️ NO TE DEJES ENGAÑAR: Si alguien te pide dinero, estás siendo estafado.
            </p>
          </div>
        </div>
      </section>

      {/* Sección ¿Quién Puede Registrarse? */}
      <section className="bg-gradient-to-br from-teal-900 to-[#08a99c] py-16 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-amber-400">
            ¿Quién Puede Registrarse?
          </h2>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto">
            Si te identificas con alguna de estas situaciones, eres víctima y tienes derecho a reparación:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Tarjeta 1: Perdiste tu vivienda */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaHome />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Perdiste tu vivienda
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Tu casa fue destruida total o parcialmente por la avalancha del 1 de abril de 2017
              </p>
            </div>

            {/* Tarjeta 2: Perdiste familiares */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaHeart />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Perdiste familiares
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Familiares fallecieron o resultaron heridos durante la tragedia
              </p>
            </div>

            {/* Tarjeta 3: Perdiste enseres y pertenencias */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaBoxes />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Perdiste enseres y pertenencias
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Muebles, electrodomésticos, vehículos, documentos o cualquier bien material
              </p>
            </div>

            {/* Tarjeta 4: Perdiste tu negocio o empleo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaBuilding />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Perdiste tu negocio o empleo
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Tu fuente de ingresos se vio afectada por la avalancha
              </p>
            </div>

            {/* Tarjeta 5: Sufriste daños físicos o psicológicos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaBrain />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Sufriste daños físicos o psicológicos
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Lesiones, traumas, depresión o cualquier afectación a tu salud
              </p>
            </div>

            {/* Tarjeta 6: Eres familiar de víctima */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-amber-400 text-5xl mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-amber-400 font-bold text-xl mb-3">
                Eres familiar de víctima
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Cónyuge, hijos, padres o hermanos de personas directamente afectadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Formulario de Registro por Pasos */}
      <section id="formulario" className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Encabezado del Formulario */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Registra tu Caso - Es Completamente Gratis
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              El registro inicial es completamente gratuito. Nuestro equipo jurídico se pondrá en contacto contigo para asesorarte sobre el proceso de reparación.
            </p>
            
            {/* Banner de Advertencia Importante */}
            <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FaExclamationTriangle className="text-amber-600 text-lg" />
                <h3 className="text-amber-800 font-bold text-lg">¡ATENCIÓN IMPORTANTE!</h3>
              </div>
              <div className="text-center">
                <p className="text-amber-800 font-semibold text-base mb-1">
                  <span className="text-red-600">Cortés Rueda Abogados</span> es la compañía oficialmente designada para llevar estos casos de manera <span className="text-emerald-600 font-bold">COMPLETAMENTE GRATUITA</span>.
                </p>
                <p className="text-amber-700 text-sm">
                  <span className="font-bold">NO TE DEJES ENGAÑAR:</span> Si alguien te pide dinero por este servicio, está siendo estafado.
                </p>
              </div>
            </div>
          </div>

          {/* Banner del Formulario */}
          <div className="bg-[#08a99c] rounded-t-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Formulario de Registro de Víctimas
            </h3>
            <p className="text-white/90">
              Completa la información paso a paso para hacer valer tus derechos
            </p>
          </div>

          {/* Indicador de Pasos */}
          {renderStepIndicator()}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-b-lg p-8">
            {/* Título del Paso Actual */}
            <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-[#08a99c]">
              Paso {currentStep} de {totalSteps}: {renderStepTitle()}
            </h3>
            </div>

            {/* Contenido del Paso Actual */}
            {renderCurrentStep()}

            {/* Navegación entre Pasos */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-500 hover:bg-gray-600 text-white'
                }`}
              >
                <FaChevronLeft />
                <span>Anterior</span>
              </button>

              <div className="text-sm text-gray-600">
                Paso {currentStep} de {totalSteps}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isStepValid(currentStep)
                      ? 'bg-[#08a99c] hover:bg-teal-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Siguiente</span>
                  <FaChevronRight />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid(currentStep)}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isStepValid(currentStep)
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FaPaperPlane />
                  <span>ENVIAR REGISTRO</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Tengo que pagar algo para registrarme o reclamar mis derechos?
                </span>
                {openFAQ === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 1 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    ¡NO! El registro inicial es completamente gratuito. Nuestro equipo jurídico se pondrá en contacto contigo para asesorarte sobre los siguientes pasos del proceso de reparación.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-emerald-800 font-semibold mb-2">
                      <span className="text-red-600">Cortés Rueda Abogados</span> es la compañía oficialmente designada para llevar estos casos de manera <span className="text-emerald-600 font-bold">COMPLETAMENTE GRATUITA</span>.
                    </p>
                    <p className="text-emerald-700 text-sm">
                      <span className="font-bold">ADVERTENCIA:</span> Si alguien te pide dinero por este servicio, está siendo estafado. Nuestro servicio es 100% gratuito para todas las víctimas.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Ya es muy tarde para reclamar? Han pasado varios años desde 2017
                </span>
                {openFAQ === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 2 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    ¡NO es tarde! Los derechos de las víctimas no prescriben. Aunque hayan pasado años, tu derecho a reparación sigue vigente. La ley colombiana protege a las víctimas sin límite de tiempo.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Qué pasa si ya recibí alguna ayuda del gobierno?
                </span>
                {openFAQ === 3 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 3 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Si ya recibiste ayuda, eso no impide que reclames una reparación integral. La ayuda previa del gobierno es independiente de tu derecho a una reparación completa por los daños sufridos.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Qué tipo de compensación puedo recibir?
                </span>
                {openFAQ === 4 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 4 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Puedes recibir compensación por daños materiales, pérdida de vivienda, daños físicos y psicológicos, pérdida de ingresos, y otros perjuicios. La reparación es integral y personalizada según tu caso.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Necesito documentos o pruebas especiales?
                </span>
                {openFAQ === 5 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 5 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    No necesitas documentos especiales para registrarte. Nuestro equipo jurídico te ayudará a recopilar la información necesaria y gestionar las pruebas requeridas para tu caso.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Qué pasa después de registrarme?
                </span>
                {openFAQ === 6 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 6 && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    Después del registro, un equipo jurídico especializado revisará tu caso, te contactará para más detalles si es necesario, y comenzará el proceso de gestión de tu reparación ante las autoridades competentes.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 - Nueva FAQ sobre Cortés Rueda Abogados */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(7)}
                className="w-full bg-[#08a99c] hover:bg-teal-700 text-white px-6 py-4 text-left flex justify-between items-center transition-colors duration-300"
              >
                <span className="font-semibold">
                  ¿Quién es Cortés Rueda Abogados y por qué es importante?
                </span>
                {openFAQ === 7 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === 7 && (
                <div className="px-6 py-4 bg-white">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-red-600">Cortés Rueda Abogados</span> es la firma jurídica oficialmente designada por la Defensoría del Pueblo para representar a las víctimas de la catástrofe de Mocoa.
                    </p>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h4 className="font-bold text-emerald-800 mb-2">✅ Servicio Completamente Gratuito</h4>
                      <p className="text-emerald-700 text-sm">
                        Nuestro servicio es 100% gratuito para todas las víctimas. No cobramos honorarios, comisiones ni ningún tipo de pago.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-bold text-red-800 mb-2">⚠️ Advertencia Contra Estafas</h4>
                      <p className="text-red-700 text-sm">
                        Si alguien le pide dinero por este servicio, está siendo estafado. Solo Cortés Rueda Abogados está autorizada para llevar estos casos de manera gratuita.
                      </p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold">Respaldo Oficial:</span> Contamos con el respaldo de la Defensoría del Pueblo y estamos comprometidos con la defensa de los derechos de las víctimas.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Tu Equipo Legal Especializado */}
      <section className="bg-gradient-to-br from-teal-900 to-[#08a99c] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-400 mb-6">
              Tu Equipo Legal Especializado
            </h2>
            <p className="text-teal-100 max-w-4xl mx-auto leading-relaxed text-lg mb-6">
              Contarás con un equipo de abogados expertos en reparación a víctimas, completamente gratis
            </p>
            
            {/* Banner de Compañía Designada */}
            <div className="bg-amber-500/20 backdrop-blur-sm rounded-lg p-4 border-2 border-amber-400 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FaShieldAlt className="text-amber-400 text-xl" />
                <h3 className="text-amber-400 font-bold text-lg">COMPAÑÍA OFICIALMENTE DESIGNADA</h3>
              </div>
              <p className="text-teal-100 font-semibold text-base">
                <span className="text-teal-200 font-bold">Cortés Rueda Abogados</span> es la firma jurídica oficialmente designada por la Defensoría del Pueblo para representar a las víctimas de la catástrofe de Mocoa de manera <span className="text-emerald-400 font-bold">COMPLETAMENTE GRATUITA</span>.
              </p>
            </div>
          </div>

          {/* Tarjetas del Equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta 1: Dr. Juan Carlos Peláez Gutiérrez */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              {/* Foto del Abogado */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img src={FotoPelaez} alt="Juan Carlos Peláez Gutiérrez" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Información */}
              <div className="text-center mb-6">
                <h3 className="text-amber-400 font-bold text-xl mb-2">
                  Dr. Juan Carlos Peláez Gutiérrez
                </h3>
                <p className="text-slate-200 text-lg mb-4">
                  Director Jurídico
                </p>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Abogado especialista en derecho administrativo y reparación a víctimas. Más de 15 años de experiencia representando comunidades afectadas por desastres naturales.
                </p>
              </div>

              {/* Tag de Especialización */}
              <div className="flex justify-center">
                <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-2 border border-amber-400">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-xs" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    Especialista en Derecho Público
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Dra. Isabel Cortés Rueda */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              {/* Foto de la Abogada */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img src={FotoCortes} alt="Isabel Cortés Rueda" className="w-full h-full object-cover scale-160 object-top" />
                </div>
              </div>
              
              {/* Información */}
              <div className="text-center mb-6">
                <h3 className="text-amber-400 font-bold text-xl mb-2">
                  Dra. Isabel Cortés Rueda
                </h3>
                <p className="text-slate-200 text-lg mb-4">
                  Coordinadora de Víctimas
                </p>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Especialista en atención a víctimas y derechos humanos. Experiencia en procesos de reparación colectiva y acompañamiento psicojurídico a comunidades vulnerables.
                </p>
              </div>

              {/* Tag de Especialización */}
              <div className="flex justify-center">
                <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-2 border border-yellow-400">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaHeart className="text-white text-xs" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    Especialista en Derechos Humanos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Necesitas Ayuda para Registrarte? */}
      <section className="bg-gradient-to-br from-teal-800 to-[#08a99c] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Necesitas Ayuda para Registrarte?
            </h2>
            <p className="text-teal-100 text-lg">
              No estás solo en este proceso. Nuestro equipo legal te apoyará con el registro inicial:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tarjeta 1: Línea de Ayuda */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-yellow-400 text-3xl">
                  <FaPhone />
                </div>
                <h3 className="text-white font-bold text-xl">
                  Línea de Ayuda
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-white text-lg font-semibold">
                  +57 (8) 429-6060
                </p>
                <div className="flex items-center space-x-2 text-teal-100">
                  <FaClock className="text-yellow-400" />
                  <span>Lunes a viernes: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: WhatsApp */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-300/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-green-500 text-3xl">
                  <FaWhatsapp />
                </div>
                <h3 className="text-white font-bold text-xl">
                  WhatsApp
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-white text-lg font-semibold">
                  +57 318 429-6060
                </p>
                <p className="text-teal-100">
                  Respuesta inmediata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Columna 1: Contacto y Ayuda */}
            <div>
              <h3 className="text-teal-600 font-bold text-xl mb-6">
                Contacto y Ayuda
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-teal-600" />
                  <span className="text-white">+57 (8) 429-6060</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-teal-600" />
                  <span className="text-white">+57 318 429-6060</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#08a99c]" />
                  <span className="text-white">victimas.mocoa@defensoria.gov.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#08a99c]" />
                  <span className="text-white">Defensoría del Pueblo - Mocoa</span>
                </div>
              </div>
            </div>

            {/* Columna 2: Tus Derechos */}
            <div>
              <h3 className="text-teal-600 font-bold text-xl mb-6">
                Tus Derechos
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600" />
                  <span className="text-white">Reparación integral</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600" />
                  <span className="text-white">Acceso gratuito a la justicia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600" />
                  <span className="text-white">Acompañamiento jurídico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600" />
                  <span className="text-white">Protección de datos personales</span>
                </div>
              </div>
            </div>

            {/* Columna 3: Respaldo Legal */}
            <div>
              <h3 className="text-teal-600 font-bold text-xl mb-6">
                Respaldo Legal
              </h3>
              <div className="space-y-4">
                <p className="text-white">Ley 1448 de 2011 - Víctimas</p>
                <p className="text-white">Ley 1581 de 2012 - Datos Personales</p>
                <p className="text-white">Constitución Política de Colombia</p>
                <p className="text-white">Defensoría del Pueblo</p>
              </div>
            </div>
          </div>

          {/* Texto Inferior del Footer */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="mb-4">
              <p className="text-white text-lg mb-4">
                <span className="font-bold">RECUERDA:</span> El registro inicial es completamente GRATUITO. Nuestro equipo jurídico se pondrá en contacto contigo para asesorarte sobre los siguientes pasos del proceso de reparación.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Plan Estratégico Víctimas de Mocoa - Respaldado por la Defensoría del Pueblo
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/573184296060"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </>
  );
}

export default App;
