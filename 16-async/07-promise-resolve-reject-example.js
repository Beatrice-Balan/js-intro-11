function connectToDB() {
    return new Promise((resolve, reject) => {
        const dbUp = true;
        setTimeout(() => {
            if(dbUp) resolve('DB connection successful...')
                else reject('ERROR: DB is down...')
        }, 3000)
    })
}

function getData() {
    return new Promise((resolve, reject) => {
        const dataAvailable = true;
        setTimeout(() => {
            if(dataAvailable) resolve('DB data is here...')
                else reject('ERROR: DB data not found...')
        }, 1500)
    })
}

function useData() {
    return new Promise((resolve, reject) => {
        const usingData = false;
        setTimeout(() => {
            if(usingData) resolve('Data is used...')
                else reject('ERROR: Data is Not used...')
        }, 500)
    })
}

async function test3() {
   try{ await connectToDB();
    await getData();
    await useData();
   }
   catch(err) {
    console.log(err)
   }
}

test3()





function test2() {
    connectToDB()
        .then(() => getData())
        .then(() => useData())
        .catch(err => console.log(err))
}

test2()

/* since you're not logging anything, you won't see anything in the output if it WORKS
errors are looged tho, so you'll see it
*/



// LONGEST WAY POSSIBLE

function test1() {
    connectToDB()
    .then((data) => {
        console.log(data)

        getData()
        .then((data) => {
            console.log(data)
        })

        useData()
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

// test1()

// DB connection successful...
// Data is used...
// DB data is here...


/* Better, but still not the best
function test2() {
    connectToDB
        .then(() => {
            getData()
                .then(() => {
                    useData()
                })
        })
        .catch(err)
}
        */

