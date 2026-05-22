const employee = {
    "hobbies": ["dancing", "cooking", "singing"]
}
let i = 0;

while (i < employee.hobbies.length) {
    console.log(`Hobby ${i + 1}: ${employee.hobbies[i]}`);
    i++;
}

for (let j = 0; j < employee.hobbies.length; j++) {
    console.log(`Hobby ${j + 1}: ${employee.hobbies[j]}`);
}