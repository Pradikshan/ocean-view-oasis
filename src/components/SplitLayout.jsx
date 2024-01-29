export const SplitLayout = ({ 
    children 
}) => {
    
    const [ left, right ] = children;

    return (
        <div className="flex flex-col md:flex-row mx-8 mt-10 mb-48">
            <>
                {left}
            </>
            <>
                {right}
            </>
        </div>
    );
}