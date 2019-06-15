import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'playerList' })
export class PlayerListPipe implements PipeTransform {
  transform(players: any[]): string {
    return players.map((player: any) => player.name).join(', ');
  }
}
