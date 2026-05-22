export const employeeData = {
    "name": "swathi",
    "email": "swathi123@gmail.com",
    "phoneNumber": "1234567890",
    "aadharId": "1234-1232-1234",
    "addresses": {
        "home": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "Anystate",
            "zipCode": "12345"
        },
        "work": {
            "street": "456 Office Ave",
            "city": "Busytown",
            "state": "BusyState",
            "zipCode": "67890"
        }
    },
    "certifications": [
        {
            "certificationName": "AWS Certified Solutions Architect",
            "validityDate": "2025-01-15"
        },
        {
            "certificationName": "Certified Kubernetes Administrator",
            "validityDate": "2026-03-10"
        }
    ],
    "hobbies": [
        "cooking",
        "dancing",
        "singing"
    ],
    "educationDetails": {
        "SSC": {
            "schoolName": "ABC High School",
            "yearOfPassing": 2010,
            "percentage": 85
        },
        "Intermediate": {
            "schoolName": "XYZ Junior College",
            "yearOfPassing": 2012,
            "percentage": 90
        },
        "Graduation": {
            "collegeName": "PQR University",
            "yearOfPassing": 2016,
            "percentage": 88
        }
    },
    "familyDetails": {
        "father": {
            "fatherName": "xyz",
            "phoneNumber": "0987654321"
        },
        "mother": {
            "motherName": "abc",
            "phoneNumber": "0987654321"
        },
        "spouse": {
            "spouseName": "pqr",
            "phoneNumber": "0987654321"
        }
    }
};

const employeeName = employeeData.name;
const employeeEmail = employeeData.email;
const employeePhoneNumber = employeeData.phoneNumber;
const employeeAadharId = employeeData.aadharId;
const employeeHomeAddress = employeeData.addresses.home;
const employeeWorkAddress = employeeData.addresses.work;

console.log(`Employee Name: ${employeeName}`);
console.log(`Employee Email: ${employeeEmail}`);
console.log(`Employee Phone Number: ${employeePhoneNumber}`);
console.log(`Employee Aadhar ID: ${employeeAadharId}`);
console.log(`Employee Home Address: ${employeeHomeAddress.street}, ${employeeHomeAddress.city}, ${employeeHomeAddress.state}, ${employeeHomeAddress.zipCode}`);
console.log(`Employee Work Address: ${employeeWorkAddress.street}, ${employeeWorkAddress.city}, ${employeeWorkAddress.state}, ${employeeWorkAddress.zipCode}`);

console.log(`hobbies: ${employeeData.hobbies}`);
console.log(`hobbies: ${employeeData.hobbies.join(", ")}`);
console.log(`hobbies: ${employeeData.hobbies[2]}`);
console.log(`certifications: ${employeeData.certifications}`);
console.log(`certifications: ${employeeData.certifications[1].certificationName}, valid until ${employeeData.certifications[1].validityDate}`);
console.log(`$(employeeName) father's name is ${employeeData.familyDetails.father.fatherName} and his phone number is ${employeeData.familyDetails.father.phoneNumber}`);

console.log(`education details are:- \n${JSON.stringify(employeeData.educationDetails, null, 4)}\n`);
console.log(`employee addresses are:- \n${JSON.stringify(employeeData.addresses, null, 2)}\n`);

let i = 0;

const hobbies = ["dancing", "cooking", "singing"];

