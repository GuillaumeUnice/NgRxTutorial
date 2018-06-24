import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  effect$ = this.actions$.ofType(TodoActionTypes.LoadTodos);

}
