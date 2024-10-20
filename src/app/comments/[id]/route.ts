import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    if(parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    const comment = comments.find((c) => c.id === parseInt(params.id))
    return Response.json(comment)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const commentIndex = comments.findIndex((c) => c.id === parseInt(params.id))
    const commentText = await request.json()
    comments[commentIndex].text = commentText.text
    return new Response(JSON.stringify(comments[commentIndex]), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const commentIndex = comments.findIndex((c) => c.id === parseInt(params.id))
    comments.splice(commentIndex, 1)
    return Response.json(comments)
}