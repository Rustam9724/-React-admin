import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from './Steps';

function Employers({setOpenComponent, employersListState, setEmployersListState}) {
    const [searchValue, setSearchValue] = useState('');
    const [step, setStep] = useState(1)
    const [isPopup, setIsPopup] = useState(false);

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

        setEmployersListState(employersListState.map(emp => {
            if (emp.id === elem.id) {
                return {...emp, name: event.target.value, lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`};
            } else {
                return emp;
            }
        }))
    }

    function editBlurHandler(elem) {
        setEmployersListState(employersListState.map(emp => {
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
        setEmployersListState(employersListState.map(emp => {
            if (emp.id === elem.id) {
                return {...emp, isEdit: true};
            } else {
                return emp;
            }
        }))
    }

    function deleteEmployer(elem) {
        setEmployersListState(employersListState.filter(emp => {
            return emp.id !== elem.id;
        }))
    }

    let employersResult;
    if (searchValue) {
        employersResult = employersListState.filter(emp => {
            return emp.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        })
    } else {
        employersResult = employersListState;
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


    let stepResult;
    switch (step) {
        case 1:
            stepResult = <FirstStep setStep={setStep}/>;
            break;
        case 2: 
            stepResult = <SecondStep setStep={setStep}/>;
            break;
        case 3:
            stepResult = <ThirdStep />;
            break;
        default: stepResult = null;
    }

    function managerEditClickHandler() {
        setIsPopup(true);
    }

    return (
        <div className="employers">
            <div className={`employers__substrate${isPopup && ' active'}`}></div>
            <div className={`employers__popup ${isPopup && 'active'}`}>
                <div className="employers__popup__cross">
                    <div onClick={() => setIsPopup(false)}></div>
                </div>
                <div className="employers__popup__steps">
                    <div className={`steps__first-step ${step === 1 && 'active'}`}></div>
                    <div className="steps__arrow"></div>
                    <div className={`steps__second-step ${step === 2 && 'active'}`}></div>
                    <div className="steps__arrow"></div>
                    <div className={`steps__third-step ${step === 3 && 'active'}`}></div>
                </div>
                {stepResult}
            </div>
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
                    </div>
                    <div className="employers__main__header__section">
                        <p>ДОЛЖНОСТЬ</p>
                    </div>
                    <div className="employers__main__header__section">
                        <p>EMAIL</p>
                    </div>
                    <div className="employers__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                    </div>
                    <div className="employers__main__header__section">
                        <p>ДЕЙСТВИЯ</p>
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
                        <div onClick={managerEditClickHandler}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employers;