import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    DocumentChangeAction,
    DocumentReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { concatMap, first, map, mergeMap, switchMap, take, tap, toArray } from 'rxjs/operators';

import { MatchModel } from '../models/match.model';
import { MatchFirebaseModel } from '../models/match-firebase.model';

@Injectable()
export class MatchService {
    private matchesCollection$: AngularFirestoreCollection<MatchFirebaseModel>;

    constructor(private readonly afs: AngularFirestore) {
        this.matchesCollection$ = afs.collection<MatchFirebaseModel>('matches');
    }

    getList()/*: Observable<MatchFirebaseModel[]> */{
        return this.matchesCollection$.snapshotChanges().pipe(
            map((actions: DocumentChangeAction<MatchFirebaseModel>[]) =>
                actions.map((action: DocumentChangeAction<MatchFirebaseModel>) => {
                    const match = action.payload.doc.data() as MatchFirebaseModel;
                    const id: string = action.payload.doc.id;

                    return { ...match, id };
                })
            ),
            tap(console.log)
            // concatMap((matches) => matches),
            // mergeMap((match) => match.field.get({}).then(doc => ({ ...match, field: doc.data() }))),
            // take(2),
            // toArray()
        );
    }

    getById(matchId: string): Observable<MatchFirebaseModel> {
        return this.matchesCollection$.doc<MatchFirebaseModel>(matchId).valueChanges();
    }
}
