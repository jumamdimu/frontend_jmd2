// Button.jsx

function Email ({children}) {
    return (
        <input
            type="email" 
            placeholder = "Email"            
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        >
        {children}
    </input>
    )
};

export default Email;
