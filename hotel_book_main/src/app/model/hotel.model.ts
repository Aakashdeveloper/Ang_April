import {IRoom} from './room.model';
import {ITrip} from './trip.model';

export interface IHotel{
    _id: string,
    name: string,
    city_name: string,
    city: string,
    locality: string,
    thumb: string,
    cost: number,
    address: string,
    type: IRoom[],
    tripType:ITrip[]
}