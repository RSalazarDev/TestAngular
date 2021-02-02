import { AbstractControl, ValidatorFn } from "@angular/forms";


export function telefonoValido(): ValidatorFn{
    return (telefono: AbstractControl):{[key:string]:any} | null => {
        const numTelefono =telefono.value;
        if(numTelefono>999999999 || numTelefono<600000000){
            return {telefono: "invalido"};
        }else{
            return null;
        }
    };
}