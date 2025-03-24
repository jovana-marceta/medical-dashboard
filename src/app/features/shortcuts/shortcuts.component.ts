import { Component } from '@angular/core';
import { ContentBlockComponent } from "../../shared/content-block/content-block.component";
import { ShortcutComponent } from "./shortcut/shortcut.component";
import { ShortcutsModel } from './models/shortcuts.model';
import { ShortcutService } from './shortcut.service';

@Component({
  selector: 'app-shortcuts',
  standalone: true,
  imports: [ContentBlockComponent, ShortcutComponent],
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.scss'
})
export class ShortcutsComponent {
  sectionTitle = "My Shortcuts";
  sectionAction = "edit shortcuts";
  shortcuts: ShortcutsModel[] = [];

  constructor(private shortcutsService: ShortcutService) {}

  ngOnInit() {
    this.shortcuts = this.shortcutsService.getShortcuts();
  }
  
}
