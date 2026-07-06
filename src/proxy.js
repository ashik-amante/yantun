import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    // const {pathname} = request.nextUrl
    // console.log(pathname);
    // if(!pathname.startsWith('/api/feedback')) {
    //     return NextResponse.json({
    //         status: 400,
    //         message: 'Invalid request'
    //     })
    // }
    const hours = new Date().getHours()
    console.log(hours);
    if(hours > 23 || hours < 7){
      return NextResponse.redirect('https://www.google.com/')
    }
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// export const config = {
//   matcher: '/api/:path*',
// }
