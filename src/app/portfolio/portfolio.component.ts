import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  
    projects={} as Project[];

    isCollapsed: boolean = true;
    typescript: boolean = false;
    python: Boolean = false;
    csharp: boolean = false;
    java: Boolean = false;
    angular:boolean=false;
    nodejs: Boolean = false;
    springboot: Boolean = false;
    filtering: Boolean = false;
  

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Paulo Martinez - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[]=[];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if(this.python){
      filterTags.push(Tag.PYTHON);
    }

    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }

    else{
      this.filtering = true;
    }
    

    this.projects = this.projectService.GetProjectsbyFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.python  = false;
    this.csharp = false;
    this.java = false;
    this.angular =false;
    this.nodejs = false;
    this.springboot = false;
    this.filtering = false;

    this.projects= this.projectService.GetProjects();
  }
}
