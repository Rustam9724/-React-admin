function ResetPassword() {
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
                    <p>Email</p>
                    <input type="text" placeholder="Placeholder"/>
                 </label>
                 <button>Отправить код</button>
            </div>
            <div className="reset-password__bottom-shape"></div>  
        </div>
    )
}

export default ResetPassword;