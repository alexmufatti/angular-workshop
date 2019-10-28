import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../../libs/core-data/src/lib/projects/project';
import { ProjectsService } from '@workshop/core-data';
import { resultMemoize } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$;

  selectedProject: Project;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log("SELECTED PROJECT",this.selectedProject);
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  cancel() {
    this.selectProject(null);
  }

}
