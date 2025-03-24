import { Component, Input } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";
import { type ShortcutsModel } from '../models/shortcuts.model';

@Component({
  selector: 'app-shortcut',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './shortcut.component.html',
  styleUrl: './shortcut.component.scss'
})
export class ShortcutComponent {

  @Input() shortcut!: ShortcutsModel;

  get iconPath(): string {
    return `assets/icons/${this.shortcut.icon}`;
  }
}
