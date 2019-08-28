import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateFieldDto } from '@shared/models/field/create-field.dto';
import { UpdateFieldDto } from '@shared/models/field/update-field.dto';
import { FieldModel } from '@shared/models/field/field.model';

@Injectable({ providedIn: 'root' })
export class FieldService {
  private readonly url = 'field';

  constructor(private http: HttpClient) {}

  getList(): Observable<FieldModel[]> {
    return this.http.get<FieldModel[]>(this.url);
  }

  getListByLatestMonth(): Observable<FieldModel[]> {
    return this.http.get<FieldModel[]>(`${this.url}/latest-month`);
  }

  getOneById(fieldId: number): Observable<FieldModel> {
    return this.http.get<FieldModel>(`${this.url}/${fieldId}`);
  }

  create(createFieldDto: CreateFieldDto): Observable<FieldModel> {
    return this.http.post<FieldModel>(this.url, createFieldDto);
  }

  removeOneById(fieldId: number): Observable<FieldModel> {
    return this.http.delete<FieldModel>(`${this.url}/${fieldId}`);
  }

  update(fieldId: number, field: UpdateFieldDto): Observable<FieldModel> {
    return this.http.put<FieldModel>(`${this.url}/${fieldId}`, field);
  }
}
