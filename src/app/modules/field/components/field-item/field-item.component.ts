import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FieldModel } from '@shared/models/field/field.model';

@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
  styleUrls: ['./field-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldItemComponent implements OnInit {
  public field: FieldModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.field = this.route.snapshot.data.field;
  }
}
