import { useState } from "react"

const Login = () => {

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const connect = () => {
        if (formData.name === "truc" && formData.password === "truc") {
            
            localStorage.setItem("user", JSON.stringify(1));
            console.log("ok");
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div id="login">
            <div className="form">
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="" value={formData.name} name="name" onChange={handleInputChange}/>
                <label htmlFor="username">Password</label>
                <input type="password" placeholder="" value={formData.password} name="password" onChange={handleInputChange}/>
                <a onClick={connect} href="/" className="button login">Se connecter</a>
                <a className="signin" href="/signin">S'inscrire</a>
            </div>
        </div>
    )
}

export default Login