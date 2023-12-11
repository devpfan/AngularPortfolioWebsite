import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Proyecto en Java + Springboot", pictures: ["../../assets/java1.png","../../assets/java2.png","../../assets/java3.png"], projectLink: "https://github.com/devpfan/Biblioteca", summary: "Bibliteca con algunos libros y reseñas", description: "Este pequeño proyecto está hecho con Java, Spring Boot, JPA y MySQL. Las vista están hechas con Thymeleaf. Se mapean las entidades a una base de datos en MySQL", tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.MYSQL, Tag.THYMELEAF, Tag.JPA]},
    {id: 1, name: "Sample TypeScript App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "sint occaecat cupidatat non proident, sunt in culpa ", description: "eur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Sample Python App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Excepteur sint occaecat cupidatat non proident,", description: "ur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.JAVA]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: " qui officia deserunt mollit anim id est laborum", description: "t nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.JAVA]},
    {id: 4, name: "Java App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: " qui officia deserunt mollit anim id est laborum", description: "veniam, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culollit anim id est laborum.", tags: [Tag.TYPESCRIPT]},
    {id: 5, name: "NodeJS", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "Excepteur sint occaecat cupidatat non proident,", description: " veniam, quis nostrud exercitation ullamce cillum dolore eu occaecat cupidatat non proident, suntt laborum.", tags: [Tag.JAVA]},
    {id: 6, name: "Spring Boot", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "https://github.com/devpfan", summary: "nulla pariatur. Excepteur sint", description: "am, illum dolore eu fugiat nul35rf2fnt mollit anim id est laborum.", tags: [Tag.SPRINGBOOT]}
  ];


  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id===id);

    if (project === undefined){
      throw new TypeError ('No hay proyectos que concuerden con este id'+id)
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
