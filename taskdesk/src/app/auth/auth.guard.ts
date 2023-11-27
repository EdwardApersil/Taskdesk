// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authServices/auth.service';
import { tap, map, take } from 'rxjs/operators';



export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user), // Map the user to a boolean indicating whether they are authenticated
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']); // Redirect to login if not authenticated
        }
      })
    );
  }
}
