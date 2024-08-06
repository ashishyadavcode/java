function generateOTPs() {
    let otps = [];

    // Generate 5 OTPs
    for (let i = 0; i < 5; i++) {
        let otp = Math.floor(Math.random() * 9000 + 1000);
        otps.push(otp);
    }

    return otps;
}

console.log("Your OTPs are: " + generateOTPs().join(", "));


// let email;
// console.log('your email is;' + email );
