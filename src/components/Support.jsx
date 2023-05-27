function Support() {

    function openFAQ(event) {
        event.target.closest('div.support__faq').childNodes[1].classList.toggle('view');
        event.target.closest('div.support__faq').childNodes[0].childNodes[1].classList.toggle('down');
    }

    let faqResult = [];
    for(let i = 1; i <= 9; i++) {
        faqResult.push(
            <div className="support__faq" key={i} onClick={event => openFAQ(event)}>
                <div className="support__faq__header">
                    <h4>Accordion Item #{i}</h4>
                    <div></div>
                </div>
                <p>Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.</p>
            </div>
        )
    }

    return (
        <div className="support">
            <h2>Поддержка</h2>
            <div className="support__main">
                <div className="support__main__section">
                    <h3>Часто задаваемые вопросы</h3>
                    {faqResult}
                </div>
                <div className="support__main__section">
                    <h3>Контакты</h3>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="support__contacts">
                        <div className="support__contacts__contact">
                            <div></div>
                            <p>+ (810) 2548 2568</p>
                        </div>
                        <div className="support__contacts__contact">
                            <div></div>
                            <p>help@help.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;