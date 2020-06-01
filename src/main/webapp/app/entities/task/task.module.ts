import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipstertest8SharedModule } from 'app/shared/shared.module';
import { TaskComponent } from './task.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskUpdateComponent } from './task-update.component';
import { TaskDeleteDialogComponent } from './task-delete-dialog.component';
import { taskRoute } from './task.route';

@NgModule({
  imports: [Jhipstertest8SharedModule, RouterModule.forChild(taskRoute)],
  declarations: [TaskComponent, TaskDetailComponent, TaskUpdateComponent, TaskDeleteDialogComponent],
  entryComponents: [TaskDeleteDialogComponent],
})
export class Jhipstertest8TaskModule {}
