import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ITask, Task } from 'app/shared/model/task.model';
import { TaskService } from './task.service';
import { TaskComponent } from './task.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskUpdateComponent } from './task-update.component';

@Injectable({ providedIn: 'root' })
export class TaskResolve implements Resolve<ITask> {
  constructor(private service: TaskService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITask> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((task: HttpResponse<Task>) => {
          if (task.body) {
            return of(task.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Task());
  }
}

export const taskRoute: Routes = [
  {
    path: '',
    component: TaskComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipstertest8App.task.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TaskDetailComponent,
    resolve: {
      task: TaskResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipstertest8App.task.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TaskUpdateComponent,
    resolve: {
      task: TaskResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipstertest8App.task.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TaskUpdateComponent,
    resolve: {
      task: TaskResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipstertest8App.task.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
