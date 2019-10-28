import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';


  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }

}
