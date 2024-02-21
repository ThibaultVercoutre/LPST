import { useState } from "react"

const Billeterie = () => {
    const [nbPaniers, setNbPaniers] = useState(0)
    const [nbCorbeilles, setNbCorbeilles] = useState(0)

    const onChangePanier = (value: number) => {
        if (value) {
            setNbPaniers(value);
        }else{
            setNbPaniers(0);
        }
    };

    const onChangeCorbeille = (value: number) => {
        if (value) {
            setNbPaniers(value);
        }else{
            setNbPaniers(0);
        }
    };

    return (
        <div id="billeterie">
            <div className="produits">
                <div>
                    <div className="image"><img src="src/assets/plat.png" alt="" /></div>
                    <div>
                        <h1>Paniers</h1>
                        <div className="compteur">
                            <div className="moins" onClick={() => setNbPaniers(nbPaniers - 1 < 0 ? 0 : nbPaniers - 1)}>-</div>
                            <input onChange={(e) => onChangePanier(parseInt(e.target.value))} value={nbPaniers}></input>
                            <div className="plus" onClick={() => setNbPaniers(nbPaniers + 1)}>+</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Corbeilles</h1>
                        <div className="compteur">
                            <div className="moins" onClick={() => setNbCorbeilles(nbCorbeilles - 1 < 0 ? 0 : nbCorbeilles - 1)}>-</div>
                            <input onChange={(e) => onChangeCorbeille(parseInt(e.target.value))} value={nbCorbeilles}></input>
                            <div className="plus" onClick={() => setNbCorbeilles(nbCorbeilles + 1)}>+</div>
                        </div>
                    </div>
                    <div className="image"><img src="src/assets/plat.png" alt="" /></div>
                </div>
            </div>
            <div className="commander">Commander</div>
        </div>
    )
}

export default Billeterie