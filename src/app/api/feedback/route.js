import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../route";
import { revalidatePath } from "next/cache";


const feedbackCollectiion = connect("feedbacks")
export async function GET(request) {
   
   const result = await feedbackCollectiion.find().toArray()
   return Response.json(result)
}


export async function POST(request) {
   const {name,message} = await request.json()

   if(!message || !name ){
      return Response.json({
         status:400,
         message:'Invalid message formate '
      })
   }
   const newFeedback = {name, message,date: new Date().toISOString()}
   const result = await feedbackCollectiion.insertOne(newFeedback)
   revalidatePath('/feedbacks')

   return Response.json(result)
}