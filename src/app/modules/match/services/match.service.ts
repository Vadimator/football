import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MatchModel } from '../models/match.model';

@Injectable()
export class MatchService {
    private matchesCollection$: AngularFirestoreCollection<MatchModel>;

    constructor(private readonly afs: AngularFirestore) {
        this.matchesCollection$ = afs.collection<MatchModel>('matches');
    }

    getList(): Observable<MatchModel[]> {
        return this.matchesCollection$.valueChanges();
    }

    getById(matchId: string): Observable<MatchModel> {
        return this.matchesCollection$.doc<MatchModel>(matchId).valueChanges();
    }
}
