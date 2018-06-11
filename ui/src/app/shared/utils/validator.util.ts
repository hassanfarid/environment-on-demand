// Angular Imports
import {FormControl} from '@angular/forms';
import {AppUtils} from "./app.util";

/**
 * Validator utility to help in form validations
 */
export class ValidatorUtil {

  public static emailValidator(control: FormControl): { [key: string]: any } {

    const emailRegexp = /^['_A-Za-z0-9-\+]+(\.['_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

    if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
    }
  }

  public static passwordValidator(control: FormControl): { [key: string]: any } {

    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*[0-9]).*$/;
    if (control.value && ((control.value.length < 8) || !passwordRegexp.test(control.value))) {
      return { invalidPassword: true };
    }
  }

  /**
   * Function to match passwords
   * @param {string} toControlName
   * @returns {(control: FormControl) => {[p: string]: any}} if value is valid and touched
   */
  public static matchWithValidator(toControlName: string) {
    let ctrl: FormControl;
    let toCtrl: FormControl;
    return function matchWith(control: FormControl): { [key: string]: any } {

      if (!control.parent) {
        return null;
      }

      if (!ctrl) {
        ctrl = control;
        toCtrl = control.parent.get(toControlName) as FormControl;

        if (!toCtrl) {
          return null;
        }

        toCtrl.valueChanges.subscribe(() => {
          ctrl.updateValueAndValidity();
        });
      }

      if (ctrl.value !== "" && toCtrl.value !== ctrl.value) {
        return {
          matchWith: true
        }
      }
      return null;
    }
  }

  public static validateRange(control: FormControl): { [key: string]: any } {

    let rangeRegexp = /^[0-9]{1,7}(\.[0-9]{1,2})?$/i;

    if (!AppUtils.isUndefinedOrNull(control.value) && !rangeRegexp.test(control.value)) {
      return {invalidRange: true};
    }

    return null;
  }

}
