import { Injectable } from '@angular/core';
import { type ShortcutsModel } from './models/shortcuts.model';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {

  private shortcutsData: ShortcutsModel[] = [
    {
      id: 's1',
      title: 'Allergies',
      icon: 'bug-ant.png',
      number: 4,
      daysSince: 'updated 2 days ago',
    },
    {
      id: 's2',
      title: 'Benefits',
      icon: 'medical-shield.png',
      number: 2,
      daysSince: 'updated 12/4/2023',
    },
    {
      id: 's3',
      title: 'Emergency Contacts',
      icon: 'healthcare-call.png',
      number: 3,
      daysSince: 'updated 10 hours ago',
    },
    {
      id: 's4',
      title: 'Immunizations',
      icon: 'shield-virus.png',
      number: 12,
      daysSince: 'updated 6/2/2024',
    },
    {
      id: 's5',
      title: 'Labs & Tests',
      icon: 'lab.png',
      number: 67,
      daysSince: 'updated 1 day ago',
    },
    {
      id: 's6',
      title: 'Conditions',
      icon: 'Checkup.png',
      number: 10,
      daysSince: 'updated 6/21/2024',
    },
    {
      id: 's7',
      title: 'Medical Care Team',
      icon: 'user-group.png',
      number: 22,
      daysSince: 'updated 4 days ago',
    },
    {
      id: 's8',
      title: 'Medications',
      icon: 'capsule-pill.png',
      number: 6,
      daysSince: 'updated 6/21/2024',
    },
    {
      id: 's9',
      title: 'Procedures',
      icon: 'joints-bone.png',
      number: 10,
      daysSince: 'updated 6/21/2024',
    },
    {
      id: 's10',
      title: 'Vitals',
      icon: 'heart-pulse.png',
      number: 22,
      daysSince: 'updated 4 days ago',
    },
    {
      id: 's11',
      title: 'Gadgets',
      icon: 'mobile.png',
      number: 2,
      daysSince: 'updated 7/19/2024',
    },
  ];

  getShortcuts(): ShortcutsModel[] {
    return this.shortcutsData;
  }
}
