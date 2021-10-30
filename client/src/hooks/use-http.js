import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = useCallback(async (configData, callbackFn) => {
        setIsLoading(true);
        setError(null);
        try {
           const responseData = await axios({
               method: configData.method,
               data: JSON.stringify(configData.data),
               url: configData.URL
           }) 
           callbackFn(responseData);
        } catch(error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }

}

export default useHttp;