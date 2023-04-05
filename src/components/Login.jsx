import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-section">
            <svg width="239" height="234" viewBox="0 0 239 234" fill="none" xmlns="http://www.w3.org/2000/svg" className="top-shape">
                <rect x="88.0605" y="0.200195" width="150" height="150" rx="20" fill="#FF9F43" fillOpacity="0.08"/>
                <rect x="88.5605" y="0.700195" width="149" height="149" rx="19.5" stroke="#FF9F43" strokeOpacity="0.16"/>
                <rect x="0.621094" y="33.7607" width="200" height="200" rx="10" fill="#FF9F43" fillOpacity="0.08"/>
                <rect x="1.12109" y="34.2607" width="199" height="199" rx="9.5" stroke="#FF9F43" strokeOpacity="0.16"/>
            </svg>
             <div className="login-form">
                 <h3><span>Вкус</span><span>Клик</span></h3>
                 <div className="welcome-section">
                    <p>Добро пожаловать!</p>
                    <p>Пожалуйста, войдите в свою учётную запись</p>
                 </div>
                 <label>
                     <p>Email</p>
                     <input type="email" placeholder="john.doe"/>
                 </label>
                 <label>
                     <p>Пароль</p>
                     <input type="password"/>
                 </label>
                 <button>Войти</button>
                 <div className="no-account"><p>Нет аккаунта? <Link className="get-register">Зарегестрироваться</Link></p></div>
                 <Link className="password-forgotten">Забыли пароль?</Link>
            </div>  
            <svg width="181" height="181" viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg" className="bottom-shape">
                <rect x="0.304688" y="0.443359" width="180" height="180" rx="20" fill="#FF9F43" fillOpacity="0.08"/>
                <rect x="1.30469" y="1.44336" width="178" height="178" rx="19" stroke="#FF9F43" strokeOpacity="0.16" strokeWidth="2" strokeDasharray="8 8"/>
                <rect x="22.8047" y="22.9434" width="135" height="135" rx="10" fill="#FF9F43" fillOpacity="0.08"/>
                <rect x="23.3047" y="23.4434" width="134" height="134" rx="9.5" stroke="#FF9F43" strokeOpacity="0.16"/>
            </svg>
   
        </div>
    )
}

export default Login;