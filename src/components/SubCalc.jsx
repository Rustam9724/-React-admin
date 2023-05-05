function SubCalc() {
    return (
        <div className="sub-calc">
            <div className="sub-calc__header">
                <h2>Калькулято подписки</h2>
                <div>
                    <div></div>
                    <p>Пополнить баланс</p>
                </div>
            </div>
            <div className="sub-calc__main">
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
                    <div>
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
                    <div>
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
                    <div>
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module">
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="fiаth" hidden/>
                        <label htmlFor="fifth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div>
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
                    <div>
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
            </div>
            <div className="sub-calc__consumtion">
                <p>Текущий расход: <b>98 руб./день</b> или <b>980 руб./месяц</b></p>
                <p>Прогноз расхода: <b>98 руб./день</b> или <b>980 руб./месяц</b></p>
            </div>
            <button>Применить</button>
        </div>
    )
}

export default SubCalc;