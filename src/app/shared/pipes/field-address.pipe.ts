import { Pipe, PipeTransform } from '@angular/core';
import { FieldModel } from '@shared/models/field/field.model';

@Pipe({
    name: 'fieldAddress'
})
export class FieldAddressPipe implements PipeTransform {
    transform(field: FieldModel): string {
        if (!field) {
            return '';
        }

        const { street, zip, city } = field;
        return `${street}, ${zip}, ${city}`;
    }
}
