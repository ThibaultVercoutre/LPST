const Signin = () => {
    return (
        <div id="signin">
            <div className="form">
                <h1>Signin</h1>
                <div className="informations">
                    <div>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" placeholder=""/>
                        <label htmlFor="firstname">Prenom</label>
                        <input type="text" placeholder="" />
                        <label htmlFor="username">Password</label>
                        <input type="password" placeholder="" />
                        <label htmlFor="username">E-Mail</label>
                        <input type="email" placeholder="" />
                        <label htmlFor="username">Numéro de téléphone</label>
                        <input type="number" placeholder="" />
                    </div>
                    <div>
                        <label htmlFor="username">Notification de bourse</label>
                        <input type="file" placeholder=""/>
                        <label htmlFor="lastname">Affiliation à l'université de lille</label>
                        <input type="file" placeholder="" />                      
                    </div>
                </div>
                <button type="button" className="signin">Créer un compte</button>
                <a className="login" href="/login">Se connecter</a>
            </div>
        </div>
    )
}

export default Signin