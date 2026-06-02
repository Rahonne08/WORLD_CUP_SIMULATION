const fs = require('fs');

const raw = fs.readFileSync('raw_players.txt', 'utf-8').trim();
const lines = raw.split('\n');

const teamsData = {};
let currentTeam = '';

for (const line of lines) {
  const t = line.trim();
  if (!t) continue;
  
  if (!t.includes(':') && !t.includes(';')) {
    currentTeam = t;
    teamsData[currentTeam] = [];
  } else {
    // Looks like "Goleiros: X, Y, Z;"
    const colonIdx = t.indexOf(':');
    if (colonIdx === -1) continue;
    let position = t.substring(0, colonIdx).trim();
    // Normalize position just in case
    if (position.includes('Goleiro')) position = 'Goleiro';
    else if (position.includes('Defensor')) position = 'Defensor';
    else if (position.includes('Meio-campista') || position === 'Meio-campistas') position = 'Meio-campista';
    else if (position.includes('Atacante')) position = 'Atacante';
    else if (position.includes('Meias/Atacantes') || position.includes('Meia/Atacantes') || position.includes('Meias/Atacante')) {
       // We'll keep it as provided or clean it up
       position = 'Meia/Atacante';
    }
    
    let playersStr = t.substring(colonIdx + 1).replace(/;/g, '').replace(/\.$/, '').trim();
    
    // Split by ' e ' and ',' (also accounting for Oxford comma before 'e')
    // Wait, some names are "Ronald Araujo (Barcelona)". We should drop the club " (Barcelona)"
    playersStr = playersStr.replace(/\([^)]+\)/g, ''); // remove parentheses contents
    
    // Split by comma
    const parts = playersStr.split(/,| e /);
    for (const p of parts) {
      // there could still be ' e ' if it was "X, Y e Z"
      const names = p.split(/ e /i);
      for (let name of names) {
         name = name.trim();
         if (name && name !== '·') {
            // remove trailing dots
            name = name.replace(/\.$/, '').trim();
            teamsData[currentTeam].push({ name, position });
         }
      }
    }
  }
}

// Map the team names in text to the team names in teamData.ts
const nameMapping = {
  'Estados Unidos': 'USA',
  'República Tcheca': 'Rep. Tcheca',
  // Ensure others match exactly
};

// Read store to get proper ID mappings
const storeStr = fs.readFileSync('lib/store.ts', 'utf-8');
const idMapping = {};
const nameRegex = /id:\s*'([A-Z]{3})',\s*name:\s*'([^']+)'/g;
let m;
while ((m = nameRegex.exec(storeStr)) !== null) {
   idMapping[m[2]] = m[1];
}
// Edge cases between article and store
idMapping['Estados Unidos'] = idMapping['EUA']; // map EUA to USA
idMapping['Bósnia'] = idMapping['Bósnia e Herzegovina'];
// Some might have subtle differences, I'll log them

const fileStr = fs.readFileSync('lib/teamData.ts', 'utf-8');

// Process replacement via AST or careful regex
let newDataStr = fileStr;
let matchCount = 0;
for (const [teamName, players] of Object.entries(teamsData)) {
  const teamId = idMapping[teamName];
  if (!teamId) {
     console.log('Skipping ' + teamName + ', not found in idMapping');
     continue;
  }
  
  // We need to match: 'RSA': { ... players: [...] } maybe?
  const regex = new RegExp(`'${teamId}':\\s*\\{[\\s\\S]*?players:\\s*\\[([\\s\\S]*?)\\]\\s*(?=,|\\})`, 'g');
  
  newDataStr = newDataStr.replace(regex, (match, p1) => {
    matchCount++;
    console.log(`Matched and updated: ${teamId} (${teamName})`);
    // Generate new players array
    const playersArr = players.map(p => `{ name: '${p.name.replace(/'/g, "\\'")}', position: '${p.position}' }`);
    
    return match.replace(p1, '\n      ' + playersArr.join(',\n      ') + '\n    ');
  });
}


fs.writeFileSync('lib/teamData.ts', newDataStr, 'utf-8');
console.log(`Done mapping real players! Updated ${matchCount} teams.`);
