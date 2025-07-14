import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from "../profile/profile";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Profile,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  close(): void {
    this.closeSidebar.emit();
  }
}
