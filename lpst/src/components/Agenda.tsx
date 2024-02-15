import { useEffect, useState } from "react"

const Agenda = () => {

    const [mounth, setMounth] = useState('')
    const [numberMounth, setNumberMounth] = useState(0)
    
    const liste_mounth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    
    useEffect(() => {
        setNumberMounth(0);
    }, []);

    useEffect(() => {
        setMounth(liste_mounth[numberMounth])
    }, [numberMounth]);

    const changeMounth = (value: number) => {
        setNumberMounth((12 + numberMounth + value)%12)
    }

    return (
        <div id="agenda">
            <div className="question">
                <div>Agenda</div>
                <div className="select_mounth">
                    <div>
                        <img onClick={() => changeMounth(-1)} src="src/assets/arrow_back.svg" alt="arrow" />
                        {mounth}
                        <img onClick={() => changeMounth(1)} src="src/assets/arrow_forward.svg" alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="tableau">
                <table>
                    <thead>
                        <tr>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi</th>
                            <th>Dimanche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>18h00</td>
                            <td>Yoga</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Agenda