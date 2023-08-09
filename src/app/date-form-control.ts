import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {

    override setValue(value: string, options: any) {

        if (!value) {
            super.setValue('', {...options, emitModelToViewChange: true})
        }

        if (value.match(/[^0-9|\/]/gi)) {
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if (value.length > 5) {
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if (this.value.length === 3 || this.value.length === 4) {
            super.setValue(value, {...options, emitModelToViewChange: true})
        }
        
        if (value.length === 2) {
            super.setValue(value + '/', {...options, emitModelToViewChange: true});
            return;
        }

    }

}
