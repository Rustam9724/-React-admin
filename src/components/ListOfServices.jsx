function ListOfServices() {
    let result = [];

    for (let i = 1; i <= 6; i++) {
        result.push(
            <div className="list-of-services__main__service-card service-card" key={i}>
                <div className="service-card__image"></div>
                <div className="service-card__main">
                    <h4>Card Title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. card title and make up the bulk of the card's content.</p>
                    <div className="service-card__order-block">
                            <button>Заказать</button>
                            <p>1234 руб</p>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="listofservices">
            <h2>Список услуг</h2>
            <div className="listofservices__main">
                {result}
            </div>
        </div>
    )
}

export default ListOfServices