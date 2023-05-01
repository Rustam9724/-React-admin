import { employers } from '../components/object';
import { useState } from 'react';

function Employers({setOpenComponent}) {
    const [employersState, setEmployersState] = useState(employers);
    const [searchValue, setSearchValue] = useState('');

    function editEmployer(event, elem) {
        const date = new Date();

        let day = date.getDate();
        if (`${day}`.length === 1) {
            day = `0${day}`
        }

        let month = date.getMonth() + 1;
        if (`${month}`.length === 1) {
            month = `0${month}`
        } 

        setEmployersState(employersState.map(emp => {
            if (emp.id === elem.id) {
                return {...emp, name: event.target.value, lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`};
            } else {
                return emp;
            }
        }))
    }

    function editBlurHandler(elem) {
        setEmployersState(employersState.map(emp => {
            if (emp.id === elem.id) {
                return {...emp, isEdit: false};
            } else {
                return emp;
            }
        }))
    }

    function editEnterHandler(event, elem) {
        if (event.key === 'Enter') {
            editBlurHandler(elem);
        }
    }

    function editClickHandler(elem) {
        setEmployersState(employersState.map(emp => {
            if (emp.id === elem.id) {
                return {...emp, isEdit: true};
            } else {
                return emp;
            }
        }))
    }

    function deleteEmployer(elem) {
        setEmployersState(employersState.filter(emp => {
            return emp.id !== elem.id;
        }))
    }

    let employersResult;
    if (searchValue) {
        employersResult = employersState.filter(emp => {
            return emp.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        })
    } else {
        employersResult = employersState;
    }



    employersResult = employersResult.map(elem => {

        return (
            <div className="employers__main__list__section" key={elem.id}>
                <div className="employers__main__list__section__name">
                    <div className={elem.cls}></div>
                    {
                        !elem.isEdit ? <p>{elem.name}</p> 
                        : <input 
                            type="text" 
                            value={elem.name} 
                            onChange={event => editEmployer(event, elem, elem.id)} 
                            onBlur={() => editBlurHandler(elem)} 
                            autoFocus 
                            maxLength="20"
                            onKeyDown={event => editEnterHandler(event, elem)}
                        />
                    }
                </div>
                <div className="employers__main__list__section__post">
                    <div>{elem.post}</div>
                </div>
                <div className="employers__main__list__section__email">{elem.email}</div>
                <div className="employers__main__list__section__last-change">{elem.lastChange}</div>
                <div className="employers__main__list__section__actions">
                    <div onClick={() => editClickHandler(elem)}></div>
                    <div onClick={() => deleteEmployer(elem)}></div>
                </div>
            </div>
        )
            
    }) 

    return (
        <div className="employers">
            <h2>Сотрудники</h2>
            <div className="employers__search-and-add">
                <div className="employers__search-and-add__search">
                    <div></div>
                    <input type="text" placeholder="Поиск" value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                </div>
                <div className="employers__search-and-add_add" onClick={() => setOpenComponent('AddEmployer')}>
                    <div></div>
                    <p>Добавить сотрудника</p>
                </div>
            </div>
            <div className="employers__main">
                <div className="employers__main__header">
                    <div className="employers__main__header__section">
                        <p>ИМЯ ФАМИЛИЯ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="employers__main__header__section">
                        <p>ДОЛЖНОСТЬ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="employers__main__header__section">
                        <p>EMAIL</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="employers__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="employers__main__header__section">
                        <p>ДЕЙСТВИЯ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="employers__main__list">
                {employersResult}
                <div className="employers__main__list__section">
                <div className="employers__main__list__section__name">
                    <div>ЖА</div>
                    <p>Edgar Jones</p>
                </div>
                <div className="employers__main__list__section__post">
                    <div>Manager</div>
                </div>
                <div className="employers__main__list__section__email">janet86@hotmail.com</div>
                <div className="employers__main__list__section__last-change">22.02.2023, 00:00</div>
                <div className="employers__main__list__section__actions">
                    <div></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Employers;