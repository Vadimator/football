import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {
    canActivate() {
        return true;
    }
}
