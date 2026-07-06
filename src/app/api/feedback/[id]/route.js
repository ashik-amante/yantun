import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollectiion = connect("feedbacks")

export async function GET(request,{params}){
    const {id} = await params
    const query = {_id : new ObjectId(id)}
    const result = await feedbackCollectiion.findOne(query)
  

    return Response.json(result)
}
export async function DELETE(request,{params}){
    const {id} = await params
    const query = {_id : new ObjectId(id)}
    const result = await feedbackCollectiion.deleteOne(query)
  

    return Response.json(result)
}
export async function PATCH(request,{params}){
    const {id} = await params
    const {message}  = await request.json()
    if(!message || !id || typeof message !== 'string'){
        return Response.json({
            status:400,
            message:'Invalid message formate '
        })
    }
    const query = {_id : new ObjectId(id)}
    const updatedData = {
        $set : {
            message
        }
    }
    const result = await feedbackCollectiion.updateOne(query,updatedData)
  

    return Response.json(result)
}