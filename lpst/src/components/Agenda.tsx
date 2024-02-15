import { useEffect, useState } from "react"
import { eachDayOfInterval, format } from 'date-fns';

const Agenda = () => {

    const [mounth, setMounth] = useState('')
    const [year, setYear] = useState('')
    const [dateSelect, setDateSelect] = useState('')
    const [numberMounth, setNumberMounth] = useState(0)
    const [tableau, setTableau] = useState<JSX.Element>(<></>)
    const [active, setActive] = useState<boolean[]>([])
    
    const liste_mounth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const liste_day = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    function getDatesInMonth(month: number, year: number) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const datesInMonth = eachDayOfInterval({ start: startDate, end: endDate });
        return datesInMonth.map((date: any) => format(date, 'yyyy-MM-dd'));
    }

    function majActive(index: number) {
        let newActive: boolean[] = [] 
        const today = new Date();
        const month = numberMounth + 1;
        const year = numberMounth >= 8 ? today.getFullYear() - 1 : today.getFullYear();
        const datesInMonth = getDatesInMonth(month, year);
        for(let i = 0; i < datesInMonth.length; i++) {
            newActive.push(i == index);
            if(i == index){
                const dateSet = new Date(datesInMonth[i]);
                setDateSelect(liste_day[dateSet.getDay()] + ' ' + dateSet.getDate() + ' ' + liste_mounth[dateSet.getMonth()] + ' ' + dateSet.getFullYear());
            }
        };
        setActive(newActive);
    }

    useEffect(() => {
        const today = new Date();
        majActive(today.getDate() - 1);
        setNumberMounth(today.getMonth());
    }, []);

    useEffect(() => {
        setMounth(liste_mounth[numberMounth])

        const today = new Date();
        const month = numberMounth + 1;
        console.log(today.getMonth());
        let year = numberMounth >= 8 ? today.getFullYear() - 1 : today.getFullYear();
        year = today.getMonth() >= 8 ? year + 1 : year;
        setYear(year.toString());
        const datesInMonth = getDatesInMonth(month, year);
        const day = new Date(datesInMonth[0])

        let tableau = <></>;
        for (let i = 0; i < Math.round((datesInMonth.length + day.getDay())/7 + 0.25); i++) { 
            let ligne = <></>;
            for (let j = 0; j < 7; j++) {
                const x = i;
                const y = j;
                if (i*7 + j + 1 < day.getDay() || i*7 + j + 1 >= datesInMonth.length + day.getDay()) {
                    ligne = (
                        <>
                            {ligne}
                            <td></td>
                        </>
                    )
                } else {
                    ligne = (
                        <>
                            {ligne}
                            <td className={active[x*7 + y - day.getDay() + 1] ? 'active day' : 'day'} onClick={() => majActive(x*7 + y - day.getDay() + 1)}>{i*7 + j - day.getDay() + 2}</td>
                        </>
                    )
                }
            
            }
            tableau = (
                <>
                    {tableau}
                    <tr>
                        {ligne}
                    </tr>
                </>
            )
        }
        setTableau(tableau);
    }, [numberMounth, active]);

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
                        {mounth} - {year}
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
                        {tableau}
                    </tbody>
                </table>
                <div>
                    <div className="title">{dateSelect}</div>
                </div>
            </div>
        </div>
    )
}

export default Agenda