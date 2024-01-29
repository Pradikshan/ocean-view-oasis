export const SplitLayout = ({ 
    children 
}) => {
    
    const [ left, right ] = children;

    return (
        <div className="flex flex-col md:flex-row md:mx-8 md:mt-10">
            <>
                {left}
            </>
            <>
                {right}
            </>
        </div>
    );
}