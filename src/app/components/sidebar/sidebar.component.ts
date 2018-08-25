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

    {path: '/users', title: 'Admins', icon: 'perm_identity', class: ''},
    {path: '/teachers', title: 'Teachers', icon: 'assignment_ind', class: ''},
    {path: '/students', title: 'Students', icon: 'face', class: ''},


    {path: '/subjects', title: 'Subjects', icon: 'subject', class: ''},
    {path: '/subject-activities', title: 'Subject Activities', icon: 'assignment', class: ''},
    {path: '/payments', title: 'Payments', icon: 'payment', class: ''}
];

export const NASTAVNIK_ROUTES: RouteInfo[] = [
  //  {path: '/users', title: 'Users', icon: 'perm_identity', class: ''},
    {path: '/subjects', title: 'Subjects', icon: 'subject', class: ''},
    {path: '/subject-activities', title: 'Subject Activities', icon: 'assignment', class: ''}
];

export const UCENIK_ROUTES: RouteInfo[] = [
    {path: '/subjects', title: 'Subjects', icon: 'subject', class: ''},
    {path: '/documents', title: 'Documents', icon: 'picture_in_picture', class: ''},
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
      if ($(window).width() > 600) {
          return false;
      }
      return true;
  };
}
