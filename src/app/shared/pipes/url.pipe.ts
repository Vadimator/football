import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform {
    transform(url: string): string {
        return url.replace(/(^\w+:|^)\/\//, '');
    }
}
