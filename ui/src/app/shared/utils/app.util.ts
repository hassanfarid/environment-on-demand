// Angular Imports
import {FormControl, FormGroup} from "@angular/forms";
// 3rd Party Imports
import * as _ from 'underscore';
import {environment} from "../../../environments/environment";

/**
 * Utilities to be used throughout app
 */
export class AppUtils {

  public static markAsDirty(group: FormGroup) {
    group.markAsDirty();
    for (let i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsDirty();
      } else if (group.controls[i] instanceof FormGroup) {
        AppUtils.markAsDirty(<FormGroup>group.controls[i]);
      }
    }
  }

  public static getError(response): string {
    let errorMessage = "Please try again!";
    if (!AppUtils.isUndefinedOrNull(response) && !AppUtils.isUndefinedOrNull(response.message)) {
      errorMessage = response.message;
      if (!AppUtils.isUndefinedOrNull(response['sub-message'])) {
        errorMessage = response['sub-message'] + ". " + errorMessage;
      }
    }

    return errorMessage;
  }

  public static isUndefinedOrNull(value): boolean {
    return (_.isUndefined(value) || _.isNull(value) || value.length === 0 || _.isEmpty(value));
  }
}
