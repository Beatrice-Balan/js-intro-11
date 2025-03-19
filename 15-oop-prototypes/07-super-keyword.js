// super keyword must be the first statement (BEFORE using 'this' keyword)
// 
// // this keyword refers to the current object of the template
// // super keyword refers to the parent of current object of the template

class Engineer {
    constructor(fullname, major) {
        this.fullname = fullname;
        this.major = major;
    }
    build() {
        console.log('Engineer builds!')
    }
}

class SoftwareEngineer extends Engineer {
    constructor(fullname, major, companyName) {
        super(fullname, major) // must be the first statement & invokes the parent constructor to assign full name and major
        this.companyName = companyName
    }
}

const eng1 = new Engineer('John Doe', 'Mechanical Engineering');
const eng2 = new SoftwareEngineer('Jane Doe', 'Software Engineering', 'Microsoft')

eng1.build()
eng2.build()