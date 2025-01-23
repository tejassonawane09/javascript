const accountId=144553 //const is use for the lock the value
let accountEmail="tejassonawane3109@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 const does not chnange //not allowed

accountEmail="tejfx3109@gmail.com" //let can change
accountPassword="123456" //var can change
accountCity="Nashik"// without any keyword it can change //dynamic way to declared the varible
let accountPincode

console.table([accountId,accountEmail,accountPassword,accountCity,accountPincode]) //table is used to show the data in table format

/*
    Prefer Not To Use var
    because of issue in block scope and functional scope
*/

console.log(accountId);


