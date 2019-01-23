import { Event } from './event';

export class CalendarDay{
    day: number;
    events: Event[];
    eventsLength: number;
    blur: boolean;
    monthIndex: number;
    year: number;
}
