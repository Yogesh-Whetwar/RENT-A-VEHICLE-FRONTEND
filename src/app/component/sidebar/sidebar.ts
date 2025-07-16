import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from "../profile/profile";
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserName } from '../../store/user/user.selectors';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {  
  userName?: string = '';
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();
   constructor(private store:Store){}
   ngOnInit(){
    this.store.select(selectUserName).subscribe(name=>{
      this.userName = name;
      console.log('User Name:', this.userName);
    })
   }
  close(): void {
    this.closeSidebar.emit();
  }
}
