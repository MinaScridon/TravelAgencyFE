export interface Tour {   
    
    idTour:number;

    tourName:string;
   
    departureDate:Date;

    returnDate:Date;

    priceForAnAdult:number;

    priceForAChild:number;

    promoted:boolean;

    numberOfDays:number;

    numberOfAdultSeats:number;

    numberOfChildSeats:number;

    availability:boolean;    
    
}
