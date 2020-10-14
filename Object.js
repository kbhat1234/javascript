let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

// Dot notation
contact.firstName = 'Ishani';

// Bracket notation
contact['address']['building'] = 5000;

console.log('contact address city is ' +contact.address.city);
// contact address city is San Jose

console.log('contact email is ' +contact.email);
// contact email is john.doe@example.com

console.log('contact details is \n');
console.log(contact);
// contact details is 
//{firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "(408)-555-9999", address: {…}}