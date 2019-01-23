import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { CalendarDay } from './calendarDay';

@Component({
  selector: 'app-dashboard-schedule-sidebar',
  templateUrl: './dashboard-schedule-sidebar.component.html',
  styleUrls: ['./dashboard-schedule-sidebar.component.scss']
})
export class DashboardScheduleSidebarComponent implements OnInit, OnChanges {  
    monthList: string[]; 
    monthIndex: number;
    selectedMonth: string;
    selectedYear: number;
    selectedDay: Date;

    @Output() dateEvent = new EventEmitter<Date>();
    @Input() clickedCalendarDay: CalendarDay;

    getSelectedDay(){
        var tempDate = new Date()
        tempDate.setDate(this.clickedCalendarDay.day);
        tempDate.setMonth(this.clickedCalendarDay.monthIndex);
        tempDate.setFullYear(this.clickedCalendarDay.year);
        this.selectedDay = tempDate;
        
    }
    prevMonth(){
        --this.monthIndex;
        if(this.monthIndex < 0){
            this.monthIndex = 11;
            --this.selectedYear;
        }
        this.selectedMonth = this.monthList[this.monthIndex];
        var tempDate = new Date();
        tempDate.setDate(1);
        tempDate.setMonth(this.monthIndex);
        tempDate.setFullYear(this.selectedYear);
        this.dateEvent.emit(tempDate);
    }
    nextMonth(){
        ++this.monthIndex;
        if(this.monthIndex > 11){
            this.monthIndex = 0;
            ++this.selectedYear;
        }
        this.selectedMonth= this.monthList[this.monthIndex];
        var tempDate = new Date();
        tempDate.setDate(1);
        tempDate.setMonth(this.monthIndex);
        tempDate.setFullYear(this.selectedYear);
        this.dateEvent.emit(tempDate);
    }
    
    constructor() { 
        this.monthList = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October",
            "November", "December"
        ];
        var today = new Date();
        this.selectedDay = today;
        this.monthIndex = today.getMonth();
        this.selectedYear = today.getFullYear();
        this.selectedMonth=this.monthList[this.monthIndex];
    }
    
    ngOnChanges(){
        this.getSelectedDay();
    }
    ngOnInit() {
    }
}
