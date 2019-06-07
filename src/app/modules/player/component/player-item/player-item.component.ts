import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: 'player-item.component.html',
  styleUrls: ['player-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemComponent implements OnInit {
  public player: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.player = this.route.snapshot.data.player;
  }
}
