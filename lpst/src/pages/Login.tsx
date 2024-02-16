const Login = () => {
    return (
        <div id="login">
            <div className="form">
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder=""/>
                <label htmlFor="username">Password</label>
                <input type="password" placeholder="" />
                <button type="button" className="login">Se connecter</button>
                <a className="signin" href="/signin">S'inscrire</a>
            </div>
        </div>
    )
}

export default Login