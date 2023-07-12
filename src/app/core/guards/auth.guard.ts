import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    isLoggedin:boolean = true;

    constructor(private router:Router){}
    canActivate() {

        if(this.isLoggedin)
            return true;

        this.router.navigate(['/']);
        return false
    }
}