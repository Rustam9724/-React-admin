function SubCalc() {
    
    function moduleClickHandler(event) {
        let target = event.target.closest("div.sub-calc__main__module");
        target.childNodes[0].childNodes[0].checked = !target.childNodes[0].childNodes[0].checked;
    }
    
    return (
        <div className="sub-calc">
            <div className="sub-calc__header">
                <h2>Калькулятор подписки</h2>
                <div>
                    <div></div>
                    <p>Пополнить баланс</p>
                </div>
            </div>
            <div className="sub-calc__main" onClick={moduleClickHandler}>
                <div className="sub-calc__main__module">
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="first" hidden/>
                        <label htmlFor="first"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module __disabled">
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>В разработке</p>
                    </div>
                </div>
                <div className="sub-calc__main__module">
                <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="third" hidden/>
                        <label htmlFor="third"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module">
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="fourth" hidden/>
                        <label htmlFor="fourth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module">
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="fifth" hidden/>
                        <label htmlFor="fifth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module">
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="sixth" hidden/>
                        <label htmlFor="sixth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
            </div>
            <div className="sub-calc__consumtion">
                <div><pre>Текущий расход: </pre> <pre>98 руб./день </pre> <pre>или </pre> <pre>980 руб./месяц </pre></div>
                <div><pre>Прогноз расхода: </pre> <pre>98 руб./день </pre> <pre>или </pre> <pre>980 руб./месяц </pre></div>
            </div>
            <button>Применить</button>
        </div>
    )
}

export default SubCalc;