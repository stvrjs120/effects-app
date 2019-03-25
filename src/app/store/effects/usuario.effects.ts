import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions,
              public usuarioServices: UsuarioService) {}

  @Effect()
  cargarUsuario$ = this.actions$.pipe(ofType(usuarioActions.CARGAR_USUARIO),
      switchMap(accion => {
          console.log(accion);
          const id = accion['id'];

          return this.usuarioServices.getUserById(id)
              .pipe(
                  map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                  catchError( error => of(new usuarioActions.CargarUsuarioFail(error)) )
                );
        }
    ));
}
