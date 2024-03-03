import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './hand.component.html',
  styleUrl: './hand.component.css'
})
export class HandComponent {

}
