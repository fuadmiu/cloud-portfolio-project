import { Injectable } from '@angular/core';
import { education } from './model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
educationList:education[]=[
  new education(2022,2024,"Masters","Computer Science",
  "Maharishi International University","Fairfield, Iowa, USA","In progress via distance education; expected completion 12/2024"),
  new education(2018,2020,"Masters","Computer Science",
  "Jahangirnagar University","Savar, Bangladesh",""),
  new education(2004,2009,"B.Sc","Physics",
  "Jahangirnagar University","Savar, Bangladesh","")
];
  constructor() { 

  }
  getEducations()
  {
    return this.educationList.slice();
  }
}
