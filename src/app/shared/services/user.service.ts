import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenModel } from '@shared/models/user/token.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly url = 'user';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<TokenModel> {
        return this.http.post<TokenModel>(`${this.url}/login`, { username, password });
    }
}
