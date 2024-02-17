import { useState, useEffect } from "react"

const Login = () => {

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const connect = () => {
        if (formData.name === "truc" && formData.password === "truc") {
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
                <button onClick={connect} type="button" className="login">Se connecter</button>
                <a className="signin" href="/signin">S'inscrire</a>
            </div>
        </div>
    )
}

export default Login