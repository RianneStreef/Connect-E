import { Component, OnInit, } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  model = {
    email: "",
    password: "",
  }

  login(formValue) {
    console.log(formValue)
    const { password, email } = formValue;
    axios.post('http://localhost:3000/api/login', { password, email });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
