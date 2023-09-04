import { useState } from 'react'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () =>{
    const[isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) =>{
        const random = Math.random();
        setLoading(true)
        try{
            await wait(2000);
            if (random < 0.5) {
                throw new Error('Not responding')
            }
            setResponse({
                type: 'success',
                message:`Thanks for the submission ${data.firstName} we will get back to you shortly!`
            })
        } catch(err){
            setResponse({
                type: 'error',
                message:`somethin went wrong due to ${err} try again`,
            })
        } finally{
            setLoading(false);
        }
    }
    return(
        {isLoading, response, submit}
    );
}

export default useSubmit;