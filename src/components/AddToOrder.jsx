import { useState } from 'react';

function AddToOrder({meelsAndDrinksListState, setMeelsAndDrinksListState}) {
    const [avilablesInput, setAvilableInput] = useState('');
    const [choosedInput, setChoosedInput] = useState('');
    const [localMeelsAndDrinksListState, setLocalMeelsAndDrinksListState] = useState([...meelsAndDrinksListState]);
    const [checkedeMeels, setCheckedMeels] = useState([]);

    function checkboxHandler(event, meel) {
        if (!event.target.value === false) {
            if (!checkedeMeels.includes(meel.id)) {
                setCheckedMeels([...checkedeMeels, meel.id])
            } else {
                setCheckedMeels([checkedeMeels.splice(checkedeMeels.findIndex((item => item === meel.id)), 1)]);
            }
        }
    }

    function addFirstMeelToChosed() {
        let newArr = [...localMeelsAndDrinksListState];
        newArr.filter(elem => !elem.isChoosed)[0].isChoosed = true;
        setLocalMeelsAndDrinksListState(newArr);
        setCheckedMeels([])
    }

    function addToChosed() {
        setLocalMeelsAndDrinksListState(localMeelsAndDrinksListState.map(meel => {
            if (checkedeMeels.includes(meel.id)) {
                return {...meel, isChoosed: true};
            } else {
                return meel;
            }
        }))
        setCheckedMeels([]);
    }

    let availableMeelsResult;
    if (avilablesInput) {
        availableMeelsResult = localMeelsAndDrinksListState.filter(meel => {
            return meel.name.toLowerCase().indexOf(avilablesInput.toLowerCase()) >= 0;
        })
    } else {
        availableMeelsResult = localMeelsAndDrinksListState;
    }

    availableMeelsResult = availableMeelsResult.map(meel => {
        if (!meel.isChoosed) {
            return (
                <div className="marketing__main__section__meel" key={meel.id}>
                    <div></div>
                    <p>{meel.name}</p>
                    <input type="checkbox" id={meel.id} hidden checked={checkedeMeels.includes(meel.id)} onChange={event => checkboxHandler(event, meel)}/>
                    <label htmlFor={meel.id}></label>
                </div>
            )
        } else {
            return null;
        }
    })

    function deleteFirstMeelFromChosed() {
        let newArr = [...localMeelsAndDrinksListState];
        newArr.filter(elem => elem.isChoosed)[0].isChoosed = false;
        setLocalMeelsAndDrinksListState(newArr);
    }

    function deletFromChosed() {
        setLocalMeelsAndDrinksListState(localMeelsAndDrinksListState.map(meel => {
            if (checkedeMeels.includes(meel.id)) {
                return {...meel, isChoosed: false};
            } else {
                return meel;
            }
        }))
        setCheckedMeels([]);
    }
    
    let choosedMeelsResult;
    if (choosedInput) {
        choosedMeelsResult = localMeelsAndDrinksListState.filter(meel => {
            return meel.name.toLowerCase().indexOf(choosedInput.toLowerCase()) >= 0;
        })
    } else {
        choosedMeelsResult = localMeelsAndDrinksListState;
    }

    choosedMeelsResult = choosedMeelsResult.map(meel => {
        if (meel.isChoosed) {
            return (
                <div className="marketing__main__section__meel" key={meel.id}>
                    <div></div>
                    <p>{meel.name}</p>
                    <input type="checkbox" hidden id={meel.id} checked={checkedeMeels.includes(meel.id)} onChange={event => checkboxHandler(event, meel)}/>
                    <label htmlFor={meel.id}></label>
                </div>
            )
        } else {
            return null;
        }
    })

    function saveBtnHandler() {
        setMeelsAndDrinksListState(localMeelsAndDrinksListState);
        setCheckedMeels([]);
    }

    return (
        <div className="marketing">
            <h2>Добавить к заказу</h2>
            <div className="marketing__main">
                <div className="marketing__main__section available__meels">
                    <h4>Доступные блюда</h4>
                    <div className="marketing__main__section__header">
                        <input type="text" placeholder="Поиск" value={avilablesInput} onChange={event => setAvilableInput(event.target.value)}/>
                        <div className="marketing__main__section__header__one-arrow" onClick={addFirstMeelToChosed}></div>
                        <div className="marketing__main__section__header__two-arrow" onClick={addToChosed}></div>
                    </div>
                    <div className="marketing__main__section__meels">
                        {availableMeelsResult}
                    </div>
                </div>
                <div className="marketing__main__section choosed__meels">
                    <h4>Выбранные блюда</h4>
                    <div className="marketing__main__section__header">
                        <div className="marketing__main__section__header__two-arrow" onClick={deletFromChosed}></div>
                        <div className="marketing__main__section__header__one-arrow" onClick={deleteFirstMeelFromChosed}></div>
                        <input type="text" placeholder="Поиск" value={choosedInput} onChange={event => setChoosedInput(event.target.value)}/>
                    </div>
                    <div className="marketing__main__section__meels">
                        {choosedMeelsResult}
                    </div>
                    <button onClick={saveBtnHandler}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AddToOrder;