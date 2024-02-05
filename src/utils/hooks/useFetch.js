import { useEffect, useState } from "react"

export const useFetch = (path) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(path);
                console.log("Fetching data from:", path);
                const data = await response.json();
                console.log("Data fetched successfully:", data);
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [path]);

    return { data, loading, error };
}