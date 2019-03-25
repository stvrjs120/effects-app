import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions,
              public usuarioServices: UsuarioService) {}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS),
      switchMap(() => this.usuarioServices.getUsers()
          .pipe(
              map(users => new usuariosActions.CargarUsuariosSuccess(users)),
              catchError( error => of(new usuariosActions.CargarUsuariosFail(error)) )
          )
    ));
}
