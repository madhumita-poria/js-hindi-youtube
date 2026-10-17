const accountId = 155677
let accountEmail = "madhu@googlecom"
var accountPassword = "12345"                // not to use var because of issue in block scope and functional scope
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "mp@mp.com"
accountPassword = "212121221"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
