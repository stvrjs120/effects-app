import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIO = '[Usiario] Cargar Usuario';
export const CARGAR_USUARIO_FAIL = '[Usiario] Cargar Usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usiario] Cargar Usuario SUCCESS';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor(public id: string) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor(public payload: any) {}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: Usuario) {}
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
