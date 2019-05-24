import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatchModel } from '../models/match.model';

@Injectable()
export class MatchService {
    private matchesCollection$: AngularFirestoreCollection<MatchModel>;

    constructor(private readonly afs: AngularFirestore) {
        this.matchesCollection$ = afs.collection<MatchModel>('matches');
    }

    getList(): Observable<MatchModel[]> {
        return this.matchesCollection$.snapshotChanges().pipe(
            map((actions: DocumentChangeAction<MatchModel>[]) =>
                actions.map((action: DocumentChangeAction<MatchModel>) => {
                    const match = action.payload.doc.data() as MatchModel;
                    const id: string = action.payload.doc.id;
                    return { ...match, id };
                }))
        );
    }

    getById(matchId: string): Observable<MatchModel> {
        return this.matchesCollection$.doc<MatchModel>(matchId).valueChanges();
    }
}
