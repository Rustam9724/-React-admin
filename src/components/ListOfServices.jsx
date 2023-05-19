function ListOfServices() {
    let result = [];

    for (let i = 1; i <= 6; i++) {
        result.push(
            <div className="listofservices">
                <h2>Список услуг</h2>
                <div className="listofservices__main">
                    <div className="list-of-services__main__servicecard service-card">
                        <div className="service-card__image"></div>
                        <h4>Card Title</h4>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content. card title and make up the bulk of the card's content.</p>
                        <div className="service-card__order-block">
                            <button>Заказать</button>
                            <p>1234 руб</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return result;
}

export default ListOfServices