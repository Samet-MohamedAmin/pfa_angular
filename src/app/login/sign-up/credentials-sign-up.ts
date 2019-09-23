export class CredentialsSignUp {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    cin: Number;
    birthday: Date;
    type: String;
    gender: String;
}

export class Student extends CredentialsSignUp {
    numInscription: Number;
    branch: String;
    yearOfStudy: Number;
    requestedPath: String;
}

export class Teacher extends CredentialsSignUp {
    department: String;
    speciality: String;
}

export class Partner extends CredentialsSignUp {
    company: String;
    speciality: String;
}


