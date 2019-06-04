import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: 'match-item.component.html',
  styleUrls: ['match-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent implements OnInit {
  public match: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.match = this.route.snapshot.data.match;
  }
}
