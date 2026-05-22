const employee = {
    "hobbies": ["dancing", "cooking", "singing"]
}

let i = 0;
if (employee.hobbies.length === 0) {
    console.log("No hobbies found for the employee.");
} else {
    while (i < employee.hobbies.length) {
        console.log(`Hobby ${i + 1}: ${employee.hobbies[i]}`);
        i++;
    }
}



