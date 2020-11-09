import {
  AfterContentInit,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'mat-sidenav-container[appSupportEmpty]',
})
export class EmptySidenavDirective implements AfterContentInit, OnDestroy {
  @ContentChild(MatSidenavContent, { read: ElementRef }) contentRef: ElementRef<
    HTMLElement
  >;
  @ContentChildren(MatSidenav, { read: ElementRef }) sidenavRefs: ElementRef<
    HTMLElement
  >[];

  private destroy$ = new Subject<void>();
  private relative = false;

  constructor(
    private container: MatSidenavContainer,
    private elementRef: ElementRef<HTMLElement>,
    private observer: ContentObserver
  ) {}

  ngAfterContentInit() {
    const contentEl = this.contentRef.nativeElement;
    if (!contentEl.hasChildNodes()) {
      this.toggle(true);
    }

    this.observer
      .observe(this.contentRef)
      .pipe(debounceTime(50), takeUntil(this.destroy$))
      .subscribe((records) => this.toggle(!contentEl.hasChildNodes()));
  }

  ngOnDestroy() {
    this.destroy$.complete();
    this.destroy$.next();
  }

  private toggle(relative: boolean) {
    if (this.relative === relative) {
      return;
    }
    this.sidenavRefs.forEach(
      (ref) => (ref.nativeElement.style.position = relative ? 'relative' : null)
    );
    this.relative = relative;
  }
}
