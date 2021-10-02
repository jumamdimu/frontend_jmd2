// Button.jsx

function Button ({children, onClick, size, type}) {

    return (
        
        <button 
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm" 
                      
        >
        {children}
    </button>
    )
};

export default Button;
