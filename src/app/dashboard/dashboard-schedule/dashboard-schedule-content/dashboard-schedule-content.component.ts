import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CalendarDay } from './calendarDay';

@Component({
  selector: 'app-dashboard-schedule-content',
  templateUrl: './dashboard-schedule-content.component.html',
  styleUrls: ['./dashboard-schedule-content.component.scss']
})
export class DashboardScheduleContentComponent implements OnInit {
  
    calendar: CalendarDay[];
    tempday: CalendarDay;

    @Input()  selectedDate: Date;
    @Output() focusedCalendarDayEvent = new EventEmitter<CalendarDay>();

    clickedCalendarDay: CalendarDay = {
        day: 0,
        events: [],
        eventsLength: 0,
        blur: false,
        monthIndex: 0,
        year: 0,
    };

    focusedDate(calendarday: CalendarDay){
        this.clickedCalendarDay = calendarday;
        this.focusedCalendarDayEvent.emit(this.clickedCalendarDay);
    }

    generateCalendar(day: Date){
        this.calendar = [];
        var firstDay = day.getDay();
        var month = day.getMonth();
        var year = day.getFullYear();
        var prevMonth = month - 1;
        var nextMonth = month + 1;
        var prevYear = year;
        var nextYear = year;

        if(prevMonth == -1){
            prevMonth = 11;
            prevYear = year - 1;
        }

        if(nextMonth == 12){
            nextMonth = 0;
            nextYear = year + 1;
        }

        var temp = new Date(day.getFullYear(), day.getMonth() + 1, 0);
        var monthLength = temp.getDate()
        
        var ctr: number;
        day.setDate(0);
        var prevMonthFinalDay = day.getDate();

        for(ctr = firstDay -1; ctr >= 0; --ctr){    
            this.tempday = {
                day: prevMonthFinalDay - ctr,
                events: [],
                eventsLength: 0,
                blur: true,
                monthIndex: prevMonth,
                year: prevYear
            }
            this.calendar.push(this.tempday);
        }
        for(ctr = 1; ctr <= monthLength; ++ctr){
            this.tempday = {
                day: ctr,
                events: [],
                eventsLength: 0,
                blur: false,
                monthIndex: month,
                year: year
            }
            this.calendar.push(this.tempday);
        }
        var calendarDaysFill = 42 - this.calendar.length;
        for(ctr = 0; ctr < calendarDaysFill; ++ctr){
            this.tempday ={
                day: ctr+1,
                events: [],
                eventsLength: 0,
                blur: true,
                monthIndex: nextMonth,
                year:nextYear
            }
            this.calendar.push(this.tempday);
        }
    }

    ngOnChanges(){
        this.generateCalendar(this.selectedDate);
    }
    constructor() {
        this.calendar =[];
    }
    ngOnInit() {
        var day = new Date();
        day.setDate(1);
        this.generateCalendar(day);
    }

}
