let myDate =new Date()
console.log(myDate);                        // 2025-03-30T19:04:55.244Z
console.log(myDate.toString());             // Sun Mar 30 2025 19:04:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());          // 2025-03-30T19:04:55.244Z
console.log(myDate.toJSON());               // 2025-03-30T19:04:55.244Z
console.log(myDate.toLocaleDateString())    // 3/30/2025
console.log(myDate.toDateString())          // Sun Mar 30 2025
console.log(myDate.toUTCString())           // Sun, 30 Mar 2025 20:10:01 GMT