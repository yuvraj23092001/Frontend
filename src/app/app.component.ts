import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Login_Registration';
  notices:any = [
    
      { id: 1, title: 'Notice 1', content: 'This is the content of notice 1.' },
      { id: 2, title: 'Notice 2', content: 'This is the content of notice 2.' },
      { id: 3, title: 'Notice 3', content: 'This is the content of notice 3.' },
    
  ]
}
