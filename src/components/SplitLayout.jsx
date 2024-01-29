export const SplitLayout = ({ 
    children 
}) => {
    
    const [ left, right ] = children;

    return (
        <div className="flex flex-col md:flex-row m-8">
            <>
                {left}
            </>
            <>
                {right}
            </>
        </div>
    );
}