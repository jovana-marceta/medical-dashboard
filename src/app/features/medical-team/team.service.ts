import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private medicalTeam = [
    {
      id: 'd1',
      name: 'Jack Phillips',
      avatar: 'dr-1.jpg',
      email: 'jack.phillips@hospitalname.com',
      phone: '(555) 123-4567',
      hospital: 'Hospital Name Example',
    },
    {
      id: 'd2',
      name: 'Catrine Murray',
      avatar: 'dr-2.jpg',
      email: 'catrine.murray@hospitalname.com',
      phone: '(444) 200-4567',
      hospital: 'Hospital Name Example 2',
    },
    {
      id: 'd3',
      name: 'Hospital Name Example',
      avatar: 'dr-2.jpg',
      email: 'hospital.name@hospitalname.com',
      phone: '(555) 200-4567',
      hospital: 'Hospital Name Example 2',
    },
  ];
  
  getMedicalTeam() {
    return this.medicalTeam;
  }
}
