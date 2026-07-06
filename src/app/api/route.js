export const feedback = [
    {
        id: 1,
        name: "mohammad",
        message: "khana valo"
    },
    {
        id: 2,
        name: "ashik",
        message: "waiter valo na "
    },
    {
        id: 3,
        name: "kamrul",
        message: "khana  na"
    },
]

export async function GET(request) {
    return Response.json(
        { 
            status: 200,
            message: 'Kaj ki hocche ?' 
        }
    )
}