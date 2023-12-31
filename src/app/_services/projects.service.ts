import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Sample Angular Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PYTHON]},
    {id: 1, name: "Sample TypeScript App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Sample Python App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.JAVA]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.JAVA]},
    {id: 4, name: "Java App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.TYPESCRIPT]},
    {id: 5, name: "NodeJS", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]},
    {id: 6, name: "Spring Boot", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.SPRINGBOOT]}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id===id);

    if (project === undefined){
      throw new TypeError ('There is no project that matches the id'+id)
    }
    return project;
  }

  GetProjectsbyFilter(filterTags: Tag[]){
    let filteredProjects: Project[]=[];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
          if (project.tags.includes(filterTag)==false){
            foundAll=false;
          }
      });
      if (foundAll){
        filteredProjects.push(project)
      }
    });
    return filteredProjects;
  }
}
