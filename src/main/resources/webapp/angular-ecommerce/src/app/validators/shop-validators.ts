import {FormControl, ValidationErrors} from "@angular/forms";

export class ShopValidators {

  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {
    if ((control.value != null) && (control.value.trim().length === 0)) {
      return {'notOnlyWhitespace': true};
    } else {
      return null;
    }
  }

  // Implement for valid cc number check
  // https://www.creditcardvalidator.org/articles/luhn-algorithm
  static creditCardChecksum(cardNumber: number) : boolean {
    return false;
  }

}
