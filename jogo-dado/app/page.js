"use client";

import { useState } from "react";

export default function JogoDeDados() {
  const [dadoP1, setDadoP1] = useState(1);
  const [dadoP2, setDadoP2] = useState(1);
  const [vencedor, setVencedor] = useState("");

  const jogarDados = () => {
    // Gera números aleatórios
    const valor1 = Math.floor(Math.random() * 6) + 1;
    const valor2 = Math.floor(Math.random() * 6) + 1;

    setDadoP1(valor1);
    setDadoP2(valor2);

    // Determina o vencedor
    if (valor1 > valor2) {
      setVencedor("Jogador 1 Venceu! 🎉");
    } else if (valor2 > valor1) {
      setVencedor("Jogador 2 Venceu! 🏆");
    } else {
      setVencedor("Empate! 🤝");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-8">Jogo de Dados</h1>
      
      <div className="flex gap-10 mb-8">
        {/* Jogador 1 */}
        <div className="text-center">
          <p className="text-xl mb-2">Jogador 1</p>
          <div className="w-24 h-24 bg-white border-4 border-blue-500 rounded-xl flex items-center justify-center text-4xl font-bold shadow-lg">
            {dadoP1}
          </div>
        </div>

        {/* Jogador 2 */}
        <div className="text-center">
          <p className="text-xl mb-2">Jogador 2</p>
          <div className="w-24 h-24 bg-white border-4 border-red-500 rounded-xl flex items-center justify-center text-4xl font-bold shadow-lg">
            {dadoP2}
          </div>
        </div>
      </div>

      <button 
        onClick={jogarDados}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xl font-semibold"
      >
        Lançar Dados!
      </button>

      {vencedor && (
        <p className="mt-8 text-2xl font-medium text-gray-800 animate-bounce">
          {vencedor}
        </p>
      )}
    </div>
  );
}