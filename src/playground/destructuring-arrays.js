const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, small, medium, large ] = item;

console.log(`A medium ${coffee} costs ${medium}.`)
