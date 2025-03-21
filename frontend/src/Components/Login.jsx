import {useState} from "react";
import {useNavigate} from "react-router";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    if (localStorage.getItem('auth') != null) {
        //add code to make sure it also isn't expired
        navigate("/Dashboard/Home");
    }


    const fetchSignUp = async () => {
        setError(null);
        if (!email.length || !password.length) {
            console.log("Email or Password Too Short!");
            return;
        }
        await fetch('http://localhost:3001/login/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password})
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (!response.user) {
                    setError({status: response.status, code: response.code});
                }
                else {
                    //localStorage is bad, just temporary
                    localStorage.setItem("auth", JSON.stringify({
                        access_token: response.session.access_token,
                        expires_at: response.session.expires_at,
                        expires_in: response.session.expires_in,
                        refresh_token: response.session.refresh_token,
                        email: response.user.email,
                    }));
                    navigate("/Dashboard/Home");
                }
                console.log(JSON.parse(localStorage.getItem("auth")));
            });
    }


    return (
        <div className="flex w-screen h-screen items-center justify-center bg-primary">
            <div className='card w-1/4 min-w-72 flex flex-col justify-between items-center gap-16 p-8 py-8'>
                <div className='flex flex-col gap-1 text-center'>
                    <h1 className='text-2xl font-bold'>
                        Login
                    </h1>
                    <h2 className='text-black/60'>
                        Don't have an account? <span onClick={() => navigate("/signUp")} className='text-tertiary font-bold hover:cursor-pointer'> Sign up</span>
                    </h2>
                    {error && <div className='text-red-500'>error {error.status}: {error.code}</div>}
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <input
                        className='outline focus:outline-tertiary transition duration-150 hover:scale-105 outline-gray-500 p-3 rounded-lg w-full'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email address'
                        type='text'
                        value={email}
                    />
                    <input
                        className='outline focus:outline-tertiary transition duration-150 hover:scale-105 outline-gray-500 p-3 rounded-lg w-full'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        type='password'
                        value={password}
                    />
                    <div className='transition hover:cursor-pointer hover:scale-105 duration-150 hover:bg-tertiary/80 text-center p-3 w-full bg-tertiary rounded-lg text-primary' onClick={fetchSignUp}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}