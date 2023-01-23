import { AbstractControl } from "@angular/forms";

 export  function PasswordMatch(password:string,confirmPassword:string){
   return function(form :AbstractControl){
         const passwordValue =form.get(password)?.value
         const confirmPasswordValue =form.get(confirmPassword)?.value
         
        if (passwordValue===confirmPasswordValue) {
            return null
        } else {
            return {passwordMismatchError:true}
        }
    }
 }