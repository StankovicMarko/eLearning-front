import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export let ROUTES: RouteInfo[];

export const ADMIN_ROUTES: RouteInfo[] = [
    {path: '/users', title: 'Users', icon: '', class: ''},
    {path: '/subjects', title: 'Subjects', icon: '', class: ''},
    {path: '/subject-activities', title: 'Subject Activities', icon: '', class: ''},
    {path: '/payments', title: 'Payments', icon: '', class: ''}
];

export const NASTAVNIK_ROUTES: RouteInfo[] = [
    {path: '/users', title: 'Users', icon: '', class: ''},
    {path: '/subjects', title: 'Subjects', icon: '', class: ''},
    {path: '/subject-activities', title: 'Subject Activities', icon: '', class: ''},
];

export const UCENIK_ROUTES: RouteInfo[] = [
    {path: '/subjects', title: 'Subjects', icon: '', class: ''},
    {path: '/documents', title: 'Documents', icon: '', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
    private userType;

    constructor(private authService: AuthService) {
    }

  ngOnInit() {
      this.userType = this.authService.getCurrentUserType();
      if (this.userType === 'Administrator') {
          this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
          ROUTES = ADMIN_ROUTES;
      } else if (this.userType === 'Nastavnik') {
          this.menuItems = NASTAVNIK_ROUTES.filter(menuItem => menuItem);
          ROUTES = NASTAVNIK_ROUTES;
      } else if (this.userType === 'Ucenik') {
          this.menuItems = UCENIK_ROUTES.filter(menuItem => menuItem);
          ROUTES = UCENIK_ROUTES;
      }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
