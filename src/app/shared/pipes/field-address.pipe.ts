import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fieldAddress'
})
export class FieldAddressPipe implements PipeTransform {
    transform({ street, zip, city }): string {
        return `${street}, ${zip}, ${city}`;
    }
}
