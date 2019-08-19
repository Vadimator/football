import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform {
    transform(url: string): string {
        if (url && url.replace) {
            return url.replace(/(^\w+:|^)\/\//, '');
        } else {
            return url;
        }
    }
}
