import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BREAKPOINTS } from '@core/constants/breakpoints';
import { MenuLateralService } from '@core/services/menu-lateral.service';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  options: AnimationOptions = {
    path: `/assets/animations/animation${
      Math.round(Math.random() * 100) % 5
    }.json`
  };
  mobile: boolean = false;
  constructor(
    private menuLateralService: MenuLateralService,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {
    this.subscription$.add(
      this.breakpointObserver
        .observe([BREAKPOINTS.lg])
        .subscribe(({ matches }) => {
          this.mobile = matches;
        })
    );
  }
  ngAfterViewInit(): void {
    this.menuLateralService.drawer = this.drawer;
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
