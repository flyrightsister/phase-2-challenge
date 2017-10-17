// searchByState.js script prints the client id, rep_name, company, city, and state that for all clients whose state matches the provided state argument.
const fs = require('fs');

const clients = () => JSON.parse(fs.readFileSync('./clients.json', 'utf8'));

// console.log(clients());
const input = process.argv[2];

function stateSearch(state) {
  console.log(`Finding clients \x1b[31m%s\x1b[37m state "${state}"...\n`, 'in');

  const stateSearchResults = [];
  const clientList = clients();
  clientList.forEach((client) => {
    // see if client.rep_name begins with name
    const stateName = client.state.toLowerCase();

    for (let i = 0; i < state.length; i++) {
      if (stateName[i] !== state[i].toLowerCase()) {
        break;
      }
      if (i === state.length - 1) {
        stateSearchResults.push({
          id: client.id,
          rep_name: client.rep_name,
          company: client.company,
          city: client.city,
          state: client.state,
        });
      }
    }
  });
  return stateSearchResults;
}

console.log(stateSearch(input));
// console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); // cyan
