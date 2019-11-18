import { FormControl, FormGroup } from '@angular/forms';

export function validateEmail(c: FormControl) {
  const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      Invalid: true
    }
  };
}
export function validatePassword(c: FormControl) {
  const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  return PASSWORD_REGEXP.test(c.value) ? null : {
    validatePassword: {
      Invalid: true
    }
  };
}

export function conformPassword(group: FormGroup){
  let pass = group.get('newPassword').value;
  let confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { notSame: true }

}
