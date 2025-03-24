import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { type Doctor } from '../models/doctor.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CardComponent, NgIf],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {

  @Input({ required: true }) doctor!: Doctor;
  @Input() isWelcome = false;

  getFirstName(name: string): string {
    return name.split(' ')[0];
  }

  get avatarPath() {
    return 'assets/images/team/' + this.doctor.avatar;
  }

}
