export interface AnswerI {
   id: string ;
   userId:string;
   questionId:string;
   answer:string;
   position:number;
   createAt: Date;
   updateAt: Date;
}
