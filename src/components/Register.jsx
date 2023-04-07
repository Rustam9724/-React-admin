import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register-section">
            <div className="register__top-shape"></div>
             <div className="register-form">
                 <h3><span>Вкус</span><span>Клик</span></h3>
                 <div className="register-welcome-section">
                    <p>Регистрация</p>
                    <p>Пожалуйста, введите свои данные для регистарции</p>
                 </div>
                 <label>
                    <p>Имя <span>*</span></p>
                    <input type="еуче" placeholder="Placeholder"/>
                 </label>
                <label>
                    <p>Фамилия</p>
                    <input type="text" placeholder="john.doe"/>
                </label>
                <label>
                    <p>Email <span>*</span></p>
                    <input type="email" placeholder="Placeholder"/>
                </label>
                <label>
                    <p>Телефон</p>
                    <input type="phone" placeholder="john.doe@gmail.com"/>
                </label>
                <label>
                    <p>Пароль <span>*</span></p>
                    <input type="password" placeholder="Placeholder"/>
                </label>
                <div className="register__i-agree-section">
                    <input type="checkbox" id="i-agree-section__checkbox"/>
                    <label htmlFor="i-agree-section__checkbox">Я согласен с <a href="#">Политикой конфиденциальности</a></label>
                </div>
                 <button>Зарегестрироваться</button>
                 <div className="register-has-account"><p>Уже есть аккаунт?</p> <Link to="/" className="register__sign-in">Войти</Link></div>
            </div>
            <div className="register__bottom-shape"></div>  
        </div>
    )
}

export default Register;