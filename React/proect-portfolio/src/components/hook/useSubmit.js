import { useState } from 'react'



const useSubmit = () =>{
    const[isLoading, setLoading] = useState(false);
    const [Response, setResponse] = useState(null);

    const submit = async (url, data) =>{
        const random = Math.random();
        setLoading(true)
        try{
            await wait(2000);
            if (random < 0.5) {
                throw new error('Not responding')
            }
            setResponse({
                type: true,
                message: 'success'
            })
        } catch(err){
            console.log(err)
        }
    }
}