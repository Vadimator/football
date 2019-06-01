import { DocumentReference } from '@angular/fire/firestore';

export class MatchFirebaseModel {
  createdDate: string;
  duration: number; // minutes
  score: string;
  field: DocumentReference;
}
