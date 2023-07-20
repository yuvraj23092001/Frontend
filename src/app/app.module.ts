import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTeacherComponent } from './components/teacher/add-teacher/add-teacher.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoticedialogComponent } from './components/notice-board/noticedialog/noticedialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddNoticeComponent,
    NoticeBoardComponent,
    NoticedialogComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
