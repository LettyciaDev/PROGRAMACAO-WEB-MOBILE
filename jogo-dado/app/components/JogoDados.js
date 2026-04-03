"use client";

import { useState } from "react";
import Dado from "./Dado";
import styles from "./JogoDados.module.css";

const LIMITE_RODADAS = 5;

export function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState(1); // 1 ou 2
  const [dadosJ1, setDadosJ1] = useState([1, 1]);
  const [dadosJ2, setDadosJ2] = useState([1, 1]);
  const [vitorias, setVitorias] = useState({ j1: 0, j2: 0 });
  const [statusRodada, setStatusRodada] = useState("");
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const rolar = () => Math.floor(Math.random() * 6) + 1;

  const jogarDados = (player) => {
    const d1 = rolar();
    const d2 = rolar();

    if (player === 1) {
      setDadosJ1([d1, d2]);
      setTurno(2);
      setStatusRodada("Vez do Jogador 2...");
    } else {
      setDadosJ2([d1, d2]);
      processarRodada(d1 + d2);
    }
  };

  const processarRodada = (somaJ2) => {
    const somaJ1 = dadosJ1[0] + dadosJ1[1];
    let resultado = "";

    if (somaJ1 > somaJ2) {
      setVitorias(v => ({ ...v, j1: v.j1 + 1 }));
      resultado = "Jogador 1 venceu a rodada!";
    } else if (somaJ2 > somaJ1) {
      setVitorias(v => ({ ...v, j2: v.j2 + 1 }));
      resultado = "Jogador 2 venceu a rodada!";
    } else {
      resultado = "Empate nesta rodada!";
    }

    setStatusRodada(resultado);

    if (rodada < LIMITE_RODADAS) {
      setTimeout(() => {
        setRodada(r => r + 1);
        setTurno(1);
        setStatusRodada(`Rodada ${rodada + 1}: Vez do Jogador 1`);
      }, 1500);
    } else {
      setFimDeJogo(true);
    }
  };

  const calcularVencedorFinal = () => {
    if (vitorias.j1 > vitorias.j2) return "🏆 Jogador 1 é o Grande Campeão!";
    if (vitorias.j2 > vitorias.j1) return "🏆 Jogador 2 é o Grande Campeão!";
    return "🤝 Empate Geral!";
  };

  const reiniciar = () => {
    setRodada(1);
    setTurno(1);
    setVitorias({ j1: 0, j2: 0 });
    setFimDeJogo(false);
    setStatusRodada("");
  };

  return (
    <div className={styles.wrapper}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada: {rodada} / {LIMITE_RODADAS}</h2>

      <div className={styles.placar}>
        <p>J1: {vitorias.j1} vitórias | J2: {vitorias.j2} vitórias</p>
      </div>

      <div className={styles.arena}>
        {/* Jogador 1 */}
        <div className={`${styles.cartaJogador} ${turno === 1 ? styles.ativo : ""}`}>
          <h3>Jogador 1</h3>
          <div className={styles.dados}>
            <Dado valor={dadosJ1[0]} />
            <Dado valor={dadosJ1[1]} />
          </div>
          <button className={styles.btnJogar} onClick={() => jogarDados(1)} disabled={turno !== 1 || fimDeJogo}>
            Jogar J1
          </button>
        </div>

        {/* Jogador 2 */}
        <div className={`${styles.cartaJogador} ${turno === 2 ? styles.ativo : ""}`}>
          <h3>Jogador 2</h3>
          <div className={styles.dados}>
            <Dado valor={dadosJ2[0]} />
            <Dado valor={dadosJ2[1]} />
          </div>
          <button className={styles.btnJogar} onClick={() => jogarDados(2)} disabled={turno !== 2 || fimDeJogo}>
            Jogar J2
          </button>
        </div>
      </div>

      <p className={styles.mensagem}>{statusRodada}</p>

      {fimDeJogo && (
        <div className={styles.overlay}>
          <div className={styles.fimJogo}>
            <h2>{calcularVencedorFinal()}</h2>
            <button onClick={reiniciar}>Jogar Novamente</button>
          </div>
        </div>
      )}
    </div>
  );
}