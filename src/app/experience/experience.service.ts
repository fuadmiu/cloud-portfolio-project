import { Injectable } from '@angular/core';
import { experience } from './model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceList:experience[]=[
    new experience("October 2023","Present","Full Stack Engineer","Creospan Inc",
    "Chicago, Illinois, USA","Working as a Full Stack Java/React developer for the client Northern Trust."+
    " Implemented event driven architecture using Kafka. Practiced TDD and best software engineering practices."+
    " Developed front-end application using React.js"),
    new experience("October 2018","March 2022","Senior Software Engineer",
    "KAZ Software Ltd","Dhaka, Bangladesh","Managed software engineering team by following agile methodologies while delivering software solutions according to client requirements."+
    " Assisted in architecting, developing, analyzing, and deploying business-critical applications." +
    " Increased application performance by migrating monolith to Microservice-based solution." +
    " Developed projects using React.js, Angular with Typescript and JavaScript."),
    new experience("October 2016","September 2018","Software Engineer",
    "KAZ Software Ltd","Dhaka, Bangladesh", "Played key role in numerous projects by engaging in all stages of the development cycle."+
    " Enhanced existing & developed new applications based on client feedback." +
    " Implemented code reviews of other developers to maximize code quality." +
    " Designed backend and frontend systems."),
    new experience("June 2013","September 2016","Associate Software Engineer",
    "KAZ Software Ltd","Dhaka, Bangladesh","Analyzed, implemented, and deployed successful software projects."+
    " Designed database system for applications." +
    " Improved application performance 20% by optimizing existing database queries." +
    " Developed Java-based driver applications to convert XML files to Word file.")
  ];
    constructor() { 
  
    }
    getExperienceList()
    {
      return this.experienceList.slice();
    }
}
