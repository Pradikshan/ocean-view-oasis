import { useEffect, useState } from "react"

export const useFetch = (path) => {
    const [data, setData] = useState('');
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

    // useEffect(() => {
    //     console.log("Component mounted");
    // }, []); // Empty dependency array for component mount

    // console.log("Rendering hook with data:", data);

    return { data, loading, error };
}