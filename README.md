# ⚽ Copa 2026 Hub

Sistema web interativo para acompanhamento e simulação da Copa do Mundo 2026.

---

## 🚀 Funcionalidades

* Visualização de grupos
* Listagem de seleções
* Simulador de partidas
* Atualização automática de tabela
* Página de regulamento

---

## 🧱 Tecnologias

* React
* TailwindCSS
* JavaScript

---

## 📁 Estrutura do Projeto

```bash
copa-2026-hub/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## 📦 Exemplo de Dados (teams.json)

```json
[
  { "name": "Brasil", "code": "BRA", "group": "C", "points": 0, "goalsFor": 0, "goalsAgainst": 0 }
]
```

---

## 🧮 Lógica do Simulador

```javascript
function atualizarTabela(timeA, timeB, golsA, golsB) {
  timeA.goalsFor += golsA;
  timeA.goalsAgainst += golsB;
  timeB.goalsFor += golsB;
  timeB.goalsAgainst += golsA;

  if (golsA > golsB) {
    timeA.points += 3;
  } else if (golsB > golsA) {
    timeB.points += 3;
  } else {
    timeA.points += 1;
    timeB.points += 1;
  }
}
```

---

## 📊 Ordenação da Tabela

```javascript
function ordenarTabela(times) {
  return times.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const saldoA = a.goalsFor - a.goalsAgainst;
    const saldoB = b.goalsFor - b.goalsAgainst;
    if (saldoB !== saldoA) return saldoB - saldoA;
    return b.goalsFor - a.goalsFor;
  });
}
```

---

## 🖥️ Componente de Grupo (React)

```jsx
export default function Grupo({ nome, times }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl">
      <h2 className="text-xl font-bold mb-2">{nome}</h2>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Time</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {times.map((t) => (
            <tr key={t.code}>
              <td>{t.name}</td>
              <td>{t.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 🎮 Simulador de Partida

```jsx
function Simulador({ timeA, timeB, onSimular }) {
  const [golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  return (
    <div>
      <input type="number" value={golsA} onChange={e => setGolsA(+e.target.value)} />
      <span> x </span>
      <input type="number" value={golsB} onChange={e => setGolsB(+e.target.value)} />
      <button onClick={() => onSimular(golsA, golsB)}>
        Simular
      </button>
    </div>
  );
}
```

---

## 📜 Regulamento

* Vitória: 3 pontos
* Empate: 1 ponto
* Derrota: 0 pontos

Critérios de desempate:

1. Saldo de gols
2. Gols marcados
3. Confronto direto

---

## ▶️ Como Rodar o Projeto

```bash
npm install
npm run dev
```

---

## 💡 Futuras Melhorias

* Login de usuários
* Ranking global
* Compartilhamento de simulações
* Integração com API de futebol

---

## 📌 Autor

Projeto desenvolvido para fins de estudo e demonstração.
