import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private overlayRef!: OverlayRef;
  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }
  abrir() {
    if (!this.overlayRef.hasAttached()) {
      const componentPortal = new ComponentPortal(LoaderComponent);
      this.overlayRef.attach(componentPortal);
    }
  }
  fechar() {
    this.overlayRef.detach();
  }
  alternar(abrir: boolean = !this.overlayRef.hasAttached()) {
    if (abrir) {
      this.abrir();
      return;
    }

    this.fechar();
  }
}
