import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddMeel({meelsAndDrinksListState, setMeelsAndDrinksListState, setOpenComponent}) {
    const [meelName, setMeelName] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [filingTime, setFilingTime] = useState('');
    const [newAllergenValue, setNewAllergenValue] = useState('');
    const [allergenListState, setAllergenListState] = useState([]);
    const [activity, setActivity] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPriceValid, setIsPriceValid] = useState(true);
    const [isQuantityValid, setIsQuantityValid] = useState(true);
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [fats, setFats] = useState('');
    const [carbohydrates, setCarbohydrates] = useState('');
    const [ingredients, setIngredients] = useState('');

    function addAllergen(newValue) {
        if (newAllergenValue !== '') {
            setAllergenListState([...allergenListState, {id: nanoid(), value: newValue}]);
            setNewAllergenValue('');
        }
    }
    
    function deleteAllergen(elem) {
        setAllergenListState(allergenListState.filter(item => {
            return item.id !== elem.id
        }))
    }

    const allergensResult = allergenListState.map(elem => {
        return (
            <div key={elem.id}>
                <p>{elem.value}</p>
                <div onClick={() => deleteAllergen(elem)}></div>
            </div>
        )
    })

    function addMeelFunc() {
        setIsNameValid(true);
        setIsPriceValid(true)
        setIsQuantityValid(true);

        if (!meelName) {
            setIsNameValid(false)
        } 
        
        if (!price) {
            setIsPriceValid(false)
        }
        
        if (!quantity) {
            setIsQuantityValid(false)
        } 

        if (meelName && price && quantity) {
            const date = new Date();

            let day = date.getDate();
            if (`${day}`.length === 1) {
                day = `0${day}`
            }
    
            let month = date.getMonth() + 1;
            if (`${month}`.length === 1) {
                month = `0${month}`
            } 
    
            const newMeel = {
                id: nanoid(),
                name: meelName,
                status: activity,
                lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
                isNameEdit: false,
                price: price,
                isPopular: false,
            }
            setMeelsAndDrinksListState([...meelsAndDrinksListState, newMeel].sort((a, b) => a.order - b.order));
            setMeelName('');
            setPrice('');
            setQuantity('');
            setOldPrice('');
            setFilingTime('');
            setDescription('');
            setCalories('');
            setProtein('');
            setFats('');
            setIngredients('');
            setCarbohydrates('');
            setAllergenListState([]);
            setActivity(true);
            setIsNameValid(true);
            setIsPriceValid(true)
            setIsQuantityValid(true);
        }       
    }

    function cancelHandler() {
        if (meelName) {
            setMeelName('');
            setActivity(true);
            setIsNameValid(true);
            setIsPriceValid(true);
            setIsQuantityValid(true);
            setPrice('');
            setQuantity('');
            setOldPrice('');
            setFilingTime('');
            setDescription('');
            setCalories('');
            setProtein('');
            setFats('');
            setCarbohydrates('');
            setAllergenListState([]);
            setIngredients('');
        }
    }

    return (
        <div className="add-meel">
            <div className="add-meel__title">
                <div onClick={() => setOpenComponent('MeelsAndDrinks')}></div>
                <h2>Добавить блюдо</h2>
            </div>
            <div className="add-meel__main">
                <div className="add-meel__left">
                    <div className="add-meel__section add-meel__section-single">
                        <label>
                            <p>Название<span>{!isNameValid && '*'}</span></p>
                            <input type="text" placeholder="Введите название" value={meelName} onChange={event => setMeelName(event.target.value)} className={!isNameValid ? "invalid-input" : null}/>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Цена, руб<span>{!isPriceValid && '*'}</span></p>
                            <input type="number" placeholder="Введите цену"  value={price < 0 ? 0 : price} onChange={event => setPrice(event.target.value)} className={!isPriceValid ? "invalid-input" : null}/>
                        </label>
                        <label>
                            <p>Старая цена, руб</p>
                            <input type="number" placeholder="Введите цену"  value={oldPrice < 0 ? 0 : oldPrice} onChange={event => setOldPrice(event.target.value)}/>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Количество<span>{!isQuantityValid && '*'}</span></p>
                            <input type="number" placeholder="Введите цену"  value={quantity < 0 ? 0 : quantity} onChange={event => setQuantity(event.target.value)} className={!isQuantityValid ? "invalid-input" : null}/>
                        </label>
                        <label>
                            <p>Единицы измерения</p>
                            <select>
                                <option>гр</option>
                                <option>кг</option>
                                <option>шт</option>
                            </select>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Время подачи, мин<span>{}</span></p>
                            <input type="number" placeholder="Введите цену"  value={filingTime < 0 ? 0 : filingTime} onChange={event => setFilingTime(event.target.value)}/>
                        </label>
                        <div className="add-meel__activity">
                        <p>Активность</p>
                        <div className="add-meel__activity__tumbler">
                            <label htmlFor="add-meel__activity__checkbox" className={!activity ? 'dischecked' : null}  onClick={() => setActivity(!activity)}>
                                <div></div>
                            </label>
                            <p>{'Вкл'}</p>
                        </div>
                        <input type="checkbox" id="add-meel__activity__checkbox" hidden/>
                        </div>
                    </div>
                </div>
                <div className="add-meel__right">
                    <div className="add-meel__section add-meel__section-description">
                        <p>Описание</p>
                        <textarea placeholder="Введите описание" value={description} onChange={event => setDescription(event.target.value)}></textarea>
                    </div>
                    <div className="add-meel__section">
                    <label>
                        <p>Ккал</p>
                        <input type="number" placeholder="Placeholder" value={calories < 0 ? 0 : calories} onChange={event => setCalories(event.target.value)}/>
                    </label>
                    <label>
                        <p>Белки, г</p>
                        <input type="number" placeholder="Placeholder" value={protein < 0 ? 0 : protein} onChange={event => setProtein(event.target.value)}/>
                    </label>
                </div>
                <div className="add-meel__section">
                    <label>
                        <p>Жиры, г</p>
                        <input type="number" placeholder="Placeholder" value={fats < 0 ? 0 : fats} onChange={event => setFats(event.target.value)}/>
                    </label>
                    <label>
                        <p>Углеводы, г</p>
                        <input type="number" placeholder="Placeholder" value={carbohydrates < 0 ? 0 : carbohydrates} onChange={event => setCarbohydrates(event.target.value)}/>
                    </label>
                </div>
                <div className="add-meel__section add-meel__section-allergens">
                    <label>
                        <p>Аллергены</p>
                        <div>
                             {allergensResult}
                             <input type="text" value={newAllergenValue} onChange={event => setNewAllergenValue(event.target.value)} onBlur={event => addAllergen(event.target.value)} placeholder="Введите аллерген"/>
                        </div>
                    </label>
                </div>
                <div className="add-meel__section add-meel__section-ingredients">
                    <p>Ингридиенты</p>
                    <textarea placeholder="Введите ингридиенты" value={ingredients} onChange={event => setIngredients(event.target.value)}></textarea>
                </div>
                <div className="add-meel__buttons">
                    <button className={!meelName ? "add-meel__buttons__cancel-btn" : "add-meel__buttons__save-btn"} onClick={cancelHandler}>Отменить</button>
                    <button className="add-meel__buttons__save-btn" onClick={addMeelFunc}>Сохранить</button>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default AddMeel;