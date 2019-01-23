import { Component, OnInit } from '@angular/core';
import { CalendarDay } from './dashboard-schedule-content/calendarDay';
@Component({
  selector: 'app-dashboard-schedule',
  templateUrl: './dashboard-schedule.component.html',
  styleUrls: ['./dashboard-schedule.component.scss']
})
export class DashboardScheduleComponent implements OnInit {
    selectedDate: Date;
    clickedCalendarDay: CalendarDay = {
            day: 0,
            monthIndex: 0,
            year: 0,
            blur: false,
            events: [],
            eventsLength: 0,
        };

    getClickedCalendarDay($event){
        this.clickedCalendarDay = $event;
    }
    getSelectedDate($event){
        this.selectedDate = $event;
    }
    
    constructor() {
        this.selectedDate = new Date();
        this.clickedCalendarDay.day = this.selectedDate.getDate();
        this.clickedCalendarDay.monthIndex = this.selectedDate.getMonth();
        this.clickedCalendarDay.year = this.selectedDate.getFullYear();
    }

    ngOnInit() {
  }

}
