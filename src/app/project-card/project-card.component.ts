import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
  bsModelRef?: BsModalRef;

  constructor(private modalService: BsModalService){


    
  }

  OpenProjectModal(){
    this.bsModelRef = this.modalService.show(ProjectModalComponent);
  }

}
