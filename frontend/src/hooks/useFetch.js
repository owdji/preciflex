import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setData(data.data);
                    setLoading(false);
                } else {
                    throw response;
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            } 
        };
        fetchData();
    }, [url]);

    return { data, error, loading };
}

export default useFetch;