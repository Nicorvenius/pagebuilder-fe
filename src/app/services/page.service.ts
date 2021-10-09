import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Component } from "@share/dto/component.dto";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getPageComponents(pageSlug: string): Observable<Component[]>{
    return this.http.get<Component[]>(environment.baseUrl + `${pageSlug}`);
  }

}
