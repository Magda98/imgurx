import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons, icons } from '../shared/utils/icons';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mx-icon',
  template: `<span class="icon" [outerHTML]="icon"></span>`,
  styleUrls: ['./icon.component.scss'],
  host: { class: 'app-icon' },
  standalone: true,
})
export class IconComponent implements OnChanges {
  @Input() type!: Icons;
  icon!: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(icons[this.type]);
  }
}
