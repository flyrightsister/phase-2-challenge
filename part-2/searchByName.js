const fs = require('fs');

const clients = () => JSON.parse(fs.readFileSync('./clients.json', 'utf8'));

// console.log(clients());
const input = process.argv.slice(2).join(' ');

function nameSearch(name) {
  console.log(`Finding clients with name "${name}"...\n`);

  const nameSearchResults = [];
  const clientList = clients();
  clientList.forEach((client) => {
    // see if client.rep_name begins with name
    const repName = client.rep_name.toLowerCase();

    for (let i = 0; i < name.length; i++) {
      if (repName[i] !== name[i].toLowerCase()) {
        break;
      }
      if (i === name.length - 1) {
        nameSearchResults.push({
          id: client.id,
          rep_name: client.rep_name,
        });
      }
    }
  });
  return nameSearchResults;
}

console.log(nameSearch(input));
