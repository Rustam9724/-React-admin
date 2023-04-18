import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddCategory({categoriesListState, setCategoriesListState, setOpenComponent}) {
    const [categoryName, setCategoryName] = useState('');
    const [priority, setPriority] = useState('');
    const [isActivity, setIsActivity] = useState(true);
    const [isValid, setIsValid] = useState(true);

    function addCategoryFunc() {
        if (!categoryName) {
            setIsValid(false)
        } else {
            const date = new Date();

            let day = date.getDate();
            if (`${day}`.length === 1) {
                day = `0${day}`
            }
    
            let month = date.getMonth() + 1;
            if (`${month}`.length === 1) {
                month = `0${month}`
            } 
    
            const newCategory = {
                id: nanoid(),
                name: categoryName,
                status: isActivity,
                lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
                order: priority ? priority : categoriesListState.length + 1,
                isEdit: false,
            }
            setCategoriesListState([...categoriesListState, newCategory].sort((a, b) => a.order - b.order));
            setCategoryName('');
            setPriority('');
            setIsActivity(true);
            setIsValid(true);
        }
    }
        
    function cancelHandler() {
        if (categoryName) {
            setCategoryName('');
            setPriority('');
            setIsActivity(true);
            setIsValid(true);
        }
    }

    return (
        <div className="add-category">
            <div className="add-category__title">
                <div onClick={() => setOpenComponent('Categories')}></div>
                <h2>Добавить категорию</h2>
            </div>
            <div className="add-category__main">
                <label>
                    <p>Название <span>{!isValid && '*'}</span></p>
                    <input type="text" placeholder="Введите название" value={categoryName} onChange={event => setCategoryName(event.target.value)} className={!isValid ? "invalid-input" : null}/>
                </label>
                <label>
                    <p>Приоритет</p>
                <input type="number" placeholder="Введите число" value={priority < 0 ? 0 : priority} onChange={event => setPriority(event.target.value)}/>
                </label>
                <div className="add-category__activity">
                    <p>Активность</p>
                    <div className="add-category__activity__tumbler">
                        <label htmlFor="add-category__activity__checkbox" className={!isActivity ? 'dischecked' : null}>
                            <div></div>
                        </label>
                        <p>{isActivity ? 'Вкл' : 'Выкл'}</p>
                    </div>
                    <input type="checkbox" id="add-category__activity__checkbox" hidden checked={isActivity} onChange={() => setIsActivity(!isActivity)}/>
                </div>
                <div className="add-category__buttons">
                    <button className={!categoryName ? "add-category__buttons__cancel-btn" : "add-category__buttons__save-btn"} onClick={cancelHandler}>Отменить</button>
                    <button className="add-category__buttons__save-btn" onClick={addCategoryFunc}>Сохранить</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddCategory;