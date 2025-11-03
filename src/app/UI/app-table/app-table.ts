import { Component, Input } from '@angular/core';
import { ModalLayout } from '../../components/modal-layout/modal-layout';

@Component({
  selector: 'app-table',
  imports: [ModalLayout],
  templateUrl: './app-table.html',
  styleUrl: './app-table.css'
})
export class AppTable{
  @Input() headers! : string[]
  @Input() rows! : string[][]
  @Input() title! : string
  @Input() bgColor : string = "white"
  @Input() tableBorderColor : string = "gray"

  onClickRow(entity : string[]){
    console.log(entity)
  }
}
