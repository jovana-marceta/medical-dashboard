import { Component, OnInit } from '@angular/core';
import { DoctorComponent } from "./doctor/doctor.component";
import { ContentBlockComponent } from "../../shared/content-block/content-block.component";
import { TeamService } from './team.service';
import { type Doctor } from './models/doctor.model';

@Component({
  selector: 'app-medical-team',
  standalone: true,
  imports: [DoctorComponent, ContentBlockComponent],
  templateUrl: './medical-team.component.html',
  styleUrl: './medical-team.component.scss'
})
export class MedicalTeamComponent implements OnInit {
  doctors = <Doctor[]>[];
  sectionTitle = "My medical care team";
  sectionAction = '';

  constructor(private medicalTeamService: TeamService) {}

  ngOnInit() {
    this.doctors = this.medicalTeamService.getMedicalTeam();
    this.updateSectionAction();
  }

  updateSectionAction() {
    this.sectionAction = `show all (${this.doctors.length} more) >`;
  }

}
