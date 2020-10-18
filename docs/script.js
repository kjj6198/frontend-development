const fs = require('fs');
const path = require('path');

const list = fs.readdirSync('./')

console.log(list.map(f => {
  const content = fs.readFileSync(f).toString('utf-8');
  const match = content.match(/\#{1}\s+(.+)/);
  
  if (match) {
    return [match[1], f]
  }

  return [f, f];
}));