
// ======================== Validation ========================
export function isValidForm(form: any): boolean {
    console.log(form.phone);
    if (form.name.length > 0 &&
         form.surname.length > 0 &&
          form.experience.length > 0 &&
           form.gender.length > 0) {
       if (isValidEmail(form.email)) {
            if (isValidPhone(form.phone)) {
                return true;
            }
            alert("Check your phone number")
            return false;
       }
       alert('Check your email')
       return false;
   }
   alert('Fill the form')
    return false;
}

function isValidEmail(email: any): boolean {
    return email.includes('@') && email.length > 3
}

function isValidPhone(phone: any): boolean {
    return /^\+?[1-9][0-9]{7,14}$/.test(phone);
}
//========================== Checking if the user already exists =================

export function existingUser(user: any): boolean{
    return user.length > 0
}