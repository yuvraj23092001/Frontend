import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoticedialogComponent } from './noticedialog/noticedialog.component';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent {
  constructor(private dialog: MatDialog, private _noticeService: NoticeService) {}
  notices : any[] = [];
  ngOnInit(){
     this.getAllTeachers();
  }
  getAllTeachers(){
  this._noticeService.getNotice().subscribe((data:[])=>{
     this.notices =
      data;
     console.log(this.notices);

   })
  } 

  openNoticeDialog(notice: any): void {
    this.dialog.open(NoticedialogComponent, {
      data: this.notices
    });
  }
}
