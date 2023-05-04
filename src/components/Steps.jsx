import { useState, useEffect } from 'react';

function FirstStep({setStep}) {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    function requestCode() {
        setIsValid(true);

        if (!email) {
            setIsValid(false);
        } else {
            setStep(2);
        }
        
    }

    return (
        <>
            <div className="employer__popup__section">
                <label>
                    <p>Email<span>{!isValid && '*'}</span></p>
                    <input type="email" placeholder="Введите почту" value={email} onChange={event => setEmail(event.target.value)} className={!isValid ? 'invalid' : null}/>
                </label>
            </div>
            <button className="employer__popup__button" onClick={requestCode}>Отправить код</button>
        </>
    )
}

function SecondStep({setStep}) {
    const [timer, setTimer] = useState(59);
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');
    const [isResendCode, setIsResendCode] = useState(false);
    const [isCodeValid, setIsCodeValid] = useState(true);
    const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
    const [isRepeatNewPasswordValid, setIsRepeatNewPasswordValid] = useState(true);

    useEffect(() => {
        if (timer >= 1){
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000)
        } else {
            setIsResendCode(true);
        }
    }, [timer])

    function applyCLickHandler() {
        setIsCodeValid(true);
        setIsNewPasswordValid(true);
        setIsRepeatNewPasswordValid(true);

        if (!code) {
            setIsCodeValid(false);
        }

        if (!newPassword) {
            setIsNewPasswordValid(false);
        }

        if (!repeatNewPassword | (repeatNewPassword !== newPassword)) {
            setIsRepeatNewPasswordValid(false);
        }

        if (code && newPassword && repeatNewPassword && newPassword === repeatNewPassword) {
            setStep(3);
            setCode('');
            setNewPassword('');
            setRepeatNewPassword('');
        }
    }

    return (
        <>
            <div className="employer__popup__section">
                <label>
                    <p>Код подтверждения <span>{!isCodeValid && '*'}</span></p>
                    <input type="text" placeholder="Введите код" value={code} onChange={event => setCode(event.target.value)} className={!isCodeValid ? 'invalid' : null}/>
                </label>
            </div>
            <div className="employer__popup__section">
                <label>
                    <p>Новый пароль <span>{!isNewPasswordValid && '*'}</span></p>
                    <input type="text" placeholder="Введите пароль" value={newPassword} onChange={event => setNewPassword(event.target.value)} className={!isNewPasswordValid ? 'invalid' : null}/>
                </label>
                <label>
                    <p>Повторите новый пароль <span>{!isRepeatNewPasswordValid && '*'}</span></p>
                    <input type="text" placeholder="Введите пароль" value={repeatNewPassword} onChange={event => setRepeatNewPassword(event.target.value)} className={!isRepeatNewPasswordValid ? 'invalid' : null}/>
                </label>
            </div>
            <button className={`employer__popup__button ${!isResendCode && 'countdown'}`}>Отправить код {!isResendCode && `повторно 00:${timer > 10 ? timer : `0${timer}`}`}</button>
            <button className="employer__popup__button" onClick={applyCLickHandler}>Применить</button>
        </>
    )
}

function ThirdStep() {
    return (
        <>
        <h2>Пароль успешно изменён!</h2>
        <button className="employer__popup__button">Хорошо!</button>
        </>
    )
}

export { FirstStep, SecondStep, ThirdStep };