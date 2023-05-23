import { useState } from 'react';
// `${date.getDate() > 9 ? day : `0${day.getDate}`}-${date.get() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getFullYear()}`}

function Calendar({date, setDate, chosedDate, setChosedDate, format}) {
    const currentDate = new Date();

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
        let next = new Date(date.getFullYear(), date.getMonth() + 1);
        let daysInMonth = (next - firstDayOfMonth)/(1000 * 3600 * 24);
        let index = (firstDayOfMonth.getDay() + 6) % 7;

        function chosedDateChange(event) {
            let target = event.target.textContent;
            if (target !== '') {
                setChosedDate(new Date(date.getFullYear(), date.getMonth(), +target));
                setDate(new Date(date.getFullYear(), date.getMonth(), +target));
                setIsCalendarOpen(false);
            }
        }
    
        let ROWS;
        if (daysInMonth === 28) {
            if (firstDayOfMonth.getDay() === 1) {
                ROWS = 4;
            } else {
                ROWS = 5;
            }
        } else if (daysInMonth === 29) {
            ROWS = 5
        } else if (daysInMonth === 30) {
            if (firstDayOfMonth.getDay() !== 0) {
                ROWS = 5;
            } else {
                ROWS = 6;
            }
        } else if (daysInMonth === 31) {
            if (firstDayOfMonth.getDay() !== 6 && firstDayOfMonth.getDay() !== 0) {
                ROWS = 5;
            } else {
                ROWS = 6;
            }
        }
    
        let table = [], 
            tr,
            k = 1 - index;
        for (let i = 0; i < ROWS; i++) {
            tr = [];
            for (let j = 0; j < 7; j++) {
                let clsName;
                if (k === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
                    clsName = 'current-date';
                } else if (k === chosedDate.getDate() && date.getMonth() === chosedDate.getMonth() && date.getFullYear() === chosedDate.getFullYear()) {
                    clsName = 'chosed-date';
                } else {
                    clsName = null;
                }
                tr.push(<td key={k} className={clsName} onClick={event => chosedDateChange(event)}>{k > 0 && k <= daysInMonth ? k : ''}</td>)
                k++;
            } 
            table.push(<tr key={i.toString()}>{tr}</tr>)
        }

        function monthChange(arrow) {
            if (arrow === 'left') {
                if (date.getMonth() > 0) {
                    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
                } else {
                    setDate(new Date(date.getFullYear() - 1, 11));
                }
            } else if (arrow === 'right') {
                if (date.getMonth() < 11) {
                    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
                } else {
                    setDate(new Date(date.getFullYear() + 1, 0));
                }
            }
        }

        function labelClickHandler() {
            setIsCalendarOpen(!isCalendarOpen);
            setDate(chosedDate);
        }

        return (
            <div className="statistics__dates__date date">
                <label onClick={labelClickHandler}>
                    <p>Дата {format}</p>
                    <div>
                        <div></div>
                        <input type="text" readOnly placeholder="Выберите дату" value={`${chosedDate.getDate() > 9 ? chosedDate.getDate() : `0${chosedDate.getDate()}`}-${chosedDate.getMonth() + 1 > 9 ? chosedDate.getMonth() + 1 : `0${chosedDate.getMonth() + 1}`}-${chosedDate.getFullYear()}`}/>
                    </div>
                </label>
                <div className={`date__calendar ${isCalendarOpen ? 'open' : null}`}>
                    <div className="date__calendar__header">
                        <div className="date__calendar__header__left">
                            <p>{monthes[date.getMonth()]}</p>
                            <p>{date.getFullYear()}</p>
                        </div>
                        <div className="date__calendar__header__right">
                            <div onClick={() => monthChange('left')}></div>
                            <div onClick={() => monthChange('right')}></div>
                        </div>
                    </div>
                    <table border='1' className="calendar">
                        <thead>
                            <tr className="daysOfWeek">
                                <th>Пн</th>
                                <th>Вт</th>
                                <th>Ср</th>
                                <th>Чт</th>
                                <th>Пт</th>
                                <th>Сб</th>
                                <th>Вс</th>
                            </tr>
                        </thead>
                        <tbody>
                        {table}
                        </tbody>
                    </table>
                </div>
            </div>
        )
}

export default Calendar;