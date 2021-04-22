import {Pipe, PipeTransform} from '@angular/core';
import {IHotel} from '../model/hotel.model';

@Pipe({
    name:'hotelSearch'
})

export class HotelSearchPipe implements PipeTransform {
    transform(value: any[], userInput:string,roomTypeId:string){
        console.log(">>>>>userInput in pipe",userInput)
        console.log(">>>>>userInput in pipe",value)
        if(userInput){
            // convert all user input in lowercase
            userInput = userInput? userInput.toLowerCase():null;
            return userInput ? value.filter((data) => 
                ((data.name.toLowerCase().indexOf(userInput) !== -1) ||
                (data.city_name.toLowerCase().indexOf(userInput) !== -1) 
                )
            ):value
        }
        else if(roomTypeId){
            console.log(">>>>>roomTypeId in pipe",roomTypeId)
            let output  = value.map((data) => {
                return data.type.filter((out) =>{
                    return out.roomtype.toString() == roomTypeId.toString()
                })
            })
            console.log(">>>>>",output)
            return output?output:value
          
        }
        else{
            return value
        }
    }
}