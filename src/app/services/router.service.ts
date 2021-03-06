import {Injectable, Injector} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { Rout } from "@share/dto/rout.dto";
import {LoadPageComponent} from "@app/load-page/load-page.component";
import {HeaderComponent} from "@share/components/header/header.component";
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  currentSettings: any;

  constructor(
    private injector: Injector,
    private http: HttpClient
  ) { }

  loadRouts(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const router = this.injector.get(Router);
        console.log(router);
        this.getRouts().subscribe(
            response => {
              this.currentSettings = response;
              this.currentSettings.forEach((element: Rout) => {
                router.config.push(
                  {
                    path: `${element.url_slug}`,
                    children: [
                      {
                        path: '',
                        component: HeaderComponent,
                        outlet: 'header',
                      },
                      {
                        path: '',
                        component: LoadPageComponent
                      }
                    ],
                  }
                );
              });
              resolve(true);
            },
            err => {
              console.log(err);
              reject(false);
            }
          );
      });
    });
  }

  public getRouts(): Observable<any> {
    return this.http.get(environment.baseUrl + 'routs');
  }
}
