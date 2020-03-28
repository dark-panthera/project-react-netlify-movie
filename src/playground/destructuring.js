const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

// const { name, age, location: { city, temp }} = person;

const { name: firstName = 'Anonymouse', age} = person;

console.log(`${firstName} is ${age}. in ${city}`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       //  name: 'Penguin'
    }
}

const { title: bookName = 'Anonymouse', author } = book;

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published