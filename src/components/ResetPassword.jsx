import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const navigate = useNavigate();

    function codeSend() {
        setIsEmailValid(false);

        if (!isEmailValid) {
            setIsEmailValid(false);
        } else {
            navigate('/')
        }
    }

    return (
        <div className="reset-password-section">
            <div className="reset-password__top-shape"></div>
             <div className="reset-password__form">
                 <div className="reset-password__steps">
                    <div className="steps__first-step"></div>
                    <div className="steps__arrow"></div>
                    <div className="steps__second-step"></div>
                    <div className="steps__arrow"></div>
                    <div className="steps__third-step"></div>
                 </div>
                 <label>
                    <p>Email {!isEmailValid && <span>*</span>}</p>
                    <input 
                        type="text" 
                        placeholder="Placeholder" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        className={!isEmailValid ? 'invalid' : null}
                    />
                 </label>
                 <button onClick={codeSend}>Отправить код</button>
            </div>
            <div className="reset-password__bottom-shape"></div>  
        </div>
    )
}

export default ResetPassword;