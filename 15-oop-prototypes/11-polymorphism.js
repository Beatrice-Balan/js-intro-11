class Instructor {
    teach() {
        console.log('TEACH');
    }
}

class PersonalTrainer extends Instructor {
    train() {
        console.log('TRAIN')
    }
}


// Polymorphism
const trainer1 = new PersonalTrainer()
const trainer2 = new Instructor()

trainer1.teach() // TEACH
trainer2.teach() // TEACH

trainer1.train() // TRAIN
trainer2.train() // TypeError: trainer2.train is not a function
// Parent canot access child class