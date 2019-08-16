import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenModel } from '@shared/models/user/token.model';
import { UserModel } from '@shared/models/user/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly url = 'user';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<TokenModel> {
        return this.http.post<TokenModel>(`${this.url}/login`, { username, password });
    }

    getList(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.url);
    }

    getOneById(userId: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.url}/${userId}`);
    }

    removeOneById(userId: number): Observable<UserModel> {
        return this.http.delete<UserModel>(`${this.url}/${userId}`);
    }
}
