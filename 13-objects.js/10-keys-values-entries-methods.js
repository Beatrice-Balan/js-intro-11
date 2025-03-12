const phone = {
    brand: 'iPhone',
    storage: 64,
    color: 'Yellow',
    price: 1000,
    getInfo: function () {}
};

// STATIC METHODS:

// keys: array of keys - > [ 'brand', 'storage', 'color', 'price', 'getInfo' ]
// values: array of values: -> [ iPhone, 64, Yellow, etc]
// entries (properties): array of properties (key value Pairs)

console.log(Object.keys(phone)); // [ 'brand', 'storage', 'color', 'price', 'getInfo' ]

console.log(Object.values(phone)); // [ 'iPhone', 64, 'Yellow', 1000, [Function: getInfo] ]

console.log(Object.entries(phone)); // nested array: 

/* Object.entries() Output
[
  [ 'brand', 'iPhone' ],
  [ 'storage', 64 ],
  [ 'color', 'Yellow' ],
  [ 'price', 1000 ],
  [ 'getInfo', [Function: getInfo] ]
]
*/

for(const feature of Object.keys(phone)) {
    console.log(feature)
}

for(const value of Object.values(phone)) {
    console.log(value)
}

for(const entry of Object.entries(phone)) {
   // console.log(entry)
    console.log(`The entry Key is '${entry[0]}' and the entry value is '${entry[1]}'`)
}

/*
The entry Key is 'brand' and the entry value is 'iPhone'
The entry Key is 'storage' and the entry value is '64'
The entry Key is 'color' and the entry value is 'Yellow'
The entry Key is 'price' and the entry value is '1000'
The entry Key is 'getInfo' and the entry value is 'function () {}'
*/

// DESTRUCTURE

for(const entry of Object.entries(phone)) {
    // console.log(entry)
    const [key, value] = entry
     console.log(`The entry Key is '${key}' and the entry value is '${value}'`)
 }

 // even easier destructure:

 for(const [key, value] of Object.entries(phone)) {
     console.log(`The entry Key is '${key}' and the entry value is '${value}'`)
 }