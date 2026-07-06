'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const FeedbackForm = () => {
    const [lastPostTime, setLastPostTime] = useState(0);
    const [Errormessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim()
        const message = e.target.message.value.trim()
        console.log(message,name);

        const currentTime =  Date.now()
        if (currentTime - lastPostTime < 30000) {
            setErrorMessage('You can only submit one feedback per second.');
            alert('You can only submit one feedback per second.')
            return
        }
        const newFeedback = { name, message }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( newFeedback)
        })
        setLastPostTime(currentTime);
        const data = await res.json()
        router.push('/feedbacks')
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-2 gap-5 text-center flex flex-col">
                <input 
                type="text" 
                name="name" 
                placeholder="your name"
                className="w-xl border-2 border-gray-200 rounded-md p-4"
                 />
                <textarea className="w-xl border-2 border-gray-200 rounded-md p-4"
                    name="message"
                    id=""
                    placeholder="write your feedback"
                    cols={50}
                    rows={10}
                >

                </textarea>
                <hr />
                <button className="btn"> Submit feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;