/*  
- Goals - 
0 - Get a user.
1 - Get the phone number of a user from its id.
2 - Get the address of a user from its id.
*/

function getUser(callback) {
    setTimeout(function (){
        return callback(null, {
            id: 1,
            name: 'Aladin',
            registerDate: new Date()
        })
    }, 1000);
}

function getPhone(userID, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: '(304) 000-00-00',
            test: '0'
        })
    }, 2000);
}

function getAddress(userID, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Strawberry',
            number: '000'
        })
    }, 2000);
}

getUser(function solveUser(error, user){
    // null || "" ||0 === false
    if(error){
        console.error('Houston, we have a problem with the User', error)
        return;
    }
    getPhone(user.id, function solvePhone(error1, phone){
        if (error1) {
            console.error('Houston, we have a problem with the Phone', error)
            return;
        }
        getAddress(user.id, function solveAddress(error2, address) {
            if (error2) {
                console.error('Houston, we have a problem with the Address', error)
                return;
            }

            console.log(`
                Name: ${user.name}
                Address: ${address.street}, ${address.number}
                Phone: ${phone.phone}
            `)
        })
    })
})





//const phone = getPhone(user.id)


//console.log('phone', phone)