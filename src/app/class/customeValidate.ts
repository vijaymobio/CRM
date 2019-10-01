import { FormControl } from '@angular/forms';

export function validateEmail(c: FormControl) {
  const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      Invalid: true
    }
  };
}
