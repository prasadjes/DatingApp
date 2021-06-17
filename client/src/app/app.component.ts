import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PRAISE THE LORD HEAVENLY FATHER, JESUS CHRIST AND HOLY SPIRIT GOD. I STARTED THIS COURSE IN THE NAME OF JESUS CHRIST. AMEN';
  users:any;

  constructor(private http: HttpClient){  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response
    }, error=>{
      console.log(error);
    })
  }

}
