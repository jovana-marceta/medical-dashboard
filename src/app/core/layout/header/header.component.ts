import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconButtonComponent } from '../../../shared/icon-button/icon-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, IconButtonComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = '/assets/images/logo.png';

  get avatarPath() {
    return 'assets/images/team/dr-1.jpg';
  }
}
