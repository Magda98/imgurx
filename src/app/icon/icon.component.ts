import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons, icons } from '../shared/utils/icons';
import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconSize = 'small' | 'large' | 'normal'

@Component({
  selector: 'mx-icon',
  template: `<span class="icon"  [outerHTML]="icon"></span>`,
  styleUrls: ['./icon.component.scss'],
  host: { class: 'app-icon',  '[class]' : 'iconSize'  },
  standalone: true,
  imports: [CommonModule]
})
export class IconComponent implements OnChanges {
  @Input() type!: Icons;
  @Input() iconSize:  IconSize = 'normal';
  icon!: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(icons[this.type]);
  }
}
