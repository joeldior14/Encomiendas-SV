import { useState } from 'react';

export function Login() {
  // EL CEREBRO: Variables para recordar lo que el usuario escribe
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  // LA PINTURA REUTILIZABLE: Diseño de los cuadros de texto
  const estiloInput = "border border-gray-300 p-2 rounded bg-white text-gray-900 font-sans focus:border-blue-600 focus:outline-none w-full block mb-4";

  return (
    /* El fondo gris que cubre toda la pantalla y centra la tarjeta */
    <div className="min-h-screen bg-[#f3f4fa] p-4 flex flex-col items-center justify-center">
      
      {/* 📦 AQUÍ ESTÁ EL CUADRO BLANCO (CONTENEDOR) */}
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6 font-sans text-center">
          Encomiendas SV
        </h1>

        {/* 1. TEXT BOX DEL CORREO */}
        <label className="block text-sm font-semibold text-gray-600 mb-1 font-sans">
          Correo Electrónico
        </label>
        <input 
          type="email" 
          placeholder="ejemplo@encomiendas.sv" 
          value={correo}
          className={estiloInput} 
          onChange={(e) => setCorreo(e.target.value)}
        />

        {/* 2. TEXT BOX DE LA CONTRASEÑA */}
        <label className="block text-sm font-semibold text-gray-600 mb-1 font-sans">
          Contraseña
        </label>
        <input 
          type="password" 
          placeholder="••••••••" 
          value={password}
          className={estiloInput} 
          onChange={(e) => setPassword(e.target.value)}
        />

      </div> {/* <-- Aquí cierra el cuadro blanco */}

    </div>
  );
}