// Button.jsx

function Password ({children}) {
    return (
        <input
            type="password" 
            placeholder = "Password"            
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        >
        {children}
    </input>
    )
};

export default Password;
