import { useEffect } from "react";


const useTitle = (title) => {
    return (
        useEffect(() => {
            document.title = `ToysCorner | ${title}`
        },[])
    );
};

export default useTitle;