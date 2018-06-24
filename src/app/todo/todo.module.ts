import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [TodoPageComponent]
})
export class TodoModule { }
