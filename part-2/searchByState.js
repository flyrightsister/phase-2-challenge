// searchByState.js script prints the client id, rep_name, company, city, and state that for all clients whose state matches the provided state argument.
const fs = require('fs');

const clients = () => JSON.parse(fs.readFileSync('./clients.json', 'utf8'));

// console.log(clients());
const input = process.argv.slice(2).join(' ');

function nameSearch(name) {
  console.log(`Finding clients \x1b[31m%s\x1b[37m state "${name}"...\n`, 'in');

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
console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); // cyan
