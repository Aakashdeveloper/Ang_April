import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-roomFilter',
    templateUrl:'roomFilter.component.html'
})

export class RoomFilterComponent{
    @Input() filterName: string;
    roomType;

    @Output() roomClicked: EventEmitter<string> = new EventEmitter<string>()

    onSelectRoom(): void{
        this.roomClicked.emit(this.roomType)
    }

}


/*
parent> child >>>> input   property []
child> parent >>>  output eventemitter event()
*/