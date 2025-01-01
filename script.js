console.log(" Email Validation is going on ")
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "devang.kamdar.23",
    "email": "devang.kamdar.23@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
async function validate() {
    document.getElementById("answer").innerHTML = ' <img src="images/loading.svg">';
    let apikey = 'ema_live_r2GoaCxZrOISer0L1GXr9dNcJwH10u0Sw93Xx2Ub';
    let email = document.getElementById("email").value;
    console.log(email);
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`

    let res = await fetch(url);
    let result = await res.json();
    let str = '<h2>Results are here </h2><br><br>';
    for (item of Object.keys(result)) {
        if (result[item] !== "" && result[item] != " ") {
            if (result[item] == "undeliverable") {
                str = str + `<div style="color:red">${item} : ${result[item]}</div>`
            }
            else if (result[item] == "deliverable") {
                str = str + `<div style="color:rgb(0, 255, 0)">${item} : ${result[item]}</div>`
            }
            else {
                str = str + `<div>${item} : ${result[item]}</div>`
            }
            // console.log(`${item} : ${result[item]}`)
        }
    }
    document.getElementById("answer").innerHTML = str;
}