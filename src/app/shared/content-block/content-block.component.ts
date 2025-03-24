import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-block',
  standalone: true,
  imports: [NgIf],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.scss'
})
export class ContentBlockComponent {
  @Input() title = "";
  @Input() actionText = "";
  @Input() hasIcon = false;
}
