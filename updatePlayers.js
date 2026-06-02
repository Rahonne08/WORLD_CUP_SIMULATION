const fs = require('fs');

const dataStr = fs.readFileSync('lib/teamData.ts', 'utf-8');

// We'll replace the existing players array for every team with a 26-man array.
let newDataStr = dataStr.replace(/players:\s*\[([\s\S]*?)\](,|(?=\s*\}))/g, (match, p1) => {
    // extract existing names
    const names = [];
    const nameRegex = /name:\s*'([^']+)'/g;
    let m;
    while ((m = nameRegex.exec(p1)) !== null) {
        names.push(m[1]);
    }

    // specific 26-man lists for demo purposes:
    if (names.includes('Vini Jr.')) {
        return `players: [
      { name: 'Alisson', position: 'Goleiro' }, { name: 'Ederson', position: 'Goleiro' }, { name: 'Bento', position: 'Goleiro' },
      { name: 'Danilo', position: 'Defensor' }, { name: 'Yan Couto', position: 'Defensor' }, { name: 'Marquinhos', position: 'Defensor' },
      { name: 'Gabriel Magalhães', position: 'Defensor' }, { name: 'Beraldo', position: 'Defensor' }, { name: 'Éder Militão', position: 'Defensor' },
      { name: 'Guilherme Arana', position: 'Defensor' }, { name: 'Wendell', position: 'Defensor' },
      { name: 'Bruno Guimarães', position: 'Meio-campista' }, { name: 'João Gomes', position: 'Meio-campista' }, { name: 'Douglas Luiz', position: 'Meio-campista' },
      { name: 'Lucas Paquetá', position: 'Meio-campista' }, { name: 'Andreas Pereira', position: 'Meio-campista' },
      { name: 'Ederson (Atalanta)', position: 'Meio-campista' }, { name: 'Rodrygo', position: 'Atacante' },
      { name: 'Vini Jr.', position: 'Atacante' }, { name: 'Endrick', position: 'Atacante' }, { name: 'Raphinha', position: 'Atacante' },
      { name: 'Gabriel Martinelli', position: 'Atacante' }, { name: 'Savinho', position: 'Atacante' }, { name: 'Evanilson', position: 'Atacante' },
      { name: 'Pepe', position: 'Atacante' }, { name: 'Neymar', position: 'Atacante' }
    ],`;
    }

    // fill with generic placeholders up to 26 if less than 26
    while(names.length < 26) {
        names.push(`Jogador ${names.length + 1}`);
    }

    const newPlayers = names.map(n => `{ name: '${n}' }`).join(',\n      ');
    return `players: [\n      ${newPlayers}\n    ],`;
});

fs.writeFileSync('lib/teamData.ts', newDataStr, 'utf-8');
console.log('Successfully updated 48 teams to have 26 players each.');
