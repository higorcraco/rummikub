import { Component } from '@angular/core';

@Component({
  selector: 'tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  number: number = 13;
  color: string = 'blue';
}
