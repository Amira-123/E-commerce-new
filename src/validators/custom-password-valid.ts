import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(formGroup:AbstractControl){
    let password= formGroup.get('password');
    let confirmPassword=formGroup.get('rePassword');

    if(confirmPassword?.pristine || password?.pristine){
     return null
    }

      return password && confirmPassword &&
    password.value !==confirmPassword.value ?{'misMatch':true} :null


}