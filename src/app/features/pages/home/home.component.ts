import { Component, OnInit, } from '@angular/core';
import { MedicalTeamComponent } from "../../medical-team/medical-team.component";
import { ShortcutsComponent } from "../../shortcuts/shortcuts.component";
import { MessageComponent } from "../../components/message/message.component";
import { DoctorComponent } from "../../medical-team/doctor/doctor.component";
import { TeamService } from '../../medical-team/team.service';
import { type Doctor } from '../../medical-team/models/doctor.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MedicalTeamComponent, ShortcutsComponent, MessageComponent, DoctorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export  default class HomePageComponent implements OnInit {

  doctors = <Doctor[]>[];

  constructor(private medicalTeamService: TeamService) {}

  ngOnInit(): void {
    this.doctors = this.medicalTeamService.getMedicalTeam();
  }

}
