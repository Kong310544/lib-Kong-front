import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-show-staff',
  templateUrl: './show-staff.component.html',
  styleUrls: ['./show-staff.component.css']
})
export class ShowStaffComponent implements OnInit {
  staffs:any;
  constructor(private service : StaffService , private router : Router) { }

  ngOnInit(): void {
    this.service.getStaff().subscribe((res)=>{
      this.staffs = res.data;
  });
  }

}
