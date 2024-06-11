import { LoginService } from './components/login/login_service.js';
import { UserMockup } from './components/users/user_mockup.js';
import { UserService } from './components/users/user_service.js';
import { conf } from './conf.js';
import { Dependency } from './libs/dependency.js';

export function configureDependencies(){
    Dependency.add('conf', conf)
    Dependency.add('userService', ()=> new UserService); //<-- EN JS LAS CLASES SON FUNCIONES!!!
    Dependency.add('userData', ()=> new UserMockup);
    Dependency.add('loginService', ()=> new LoginService);
}