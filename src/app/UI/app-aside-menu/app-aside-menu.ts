import { NgComponentOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { LayoutSidebarLeftCollapseIcon } from '../../components/icons/layout-sidebar-left-collapse-icon/layout-sidebar-left-collapse-icon';
import { LayoutSidebarLeftExpandIcon } from '../../components/icons/layout-sidebar-left-expand-icon/layout-sidebar-left-expand-icon';
import { SettingsIcon } from '../../components/icons/settings-icon/settings-icon';
// Define la estructura de los botones del aside menu
export interface AsideMenuButton{
  icon : Type<any>
  text : string
  componentRelated : Type<any>
}
@Component({
  selector: 'app-aside-menu',
  imports: [NgComponentOutlet,LayoutSidebarLeftCollapseIcon,LayoutSidebarLeftExpandIcon,SettingsIcon],
  templateUrl: './app-aside-menu.html',
  styleUrl: './app-aside-menu.css'
})
export class AppAsideMenu implements OnInit{
  @Input() titulo! : string
  @Input() buttons! : AsideMenuButton[]
  @Output() componentSelected = new EventEmitter<any>()
  currentComponent : Type<any> | undefined = undefined
  ngOnInit(): void {
    if(this.buttons) {
      this.currentComponent =  this.buttons[0].componentRelated
      this.componentSelected.emit(this.currentComponent)
    }
  }
  buttonOnClick(btn : AsideMenuButton){
    this.currentComponent = btn.componentRelated
    this.componentSelected.emit(this.currentComponent)
  }
}