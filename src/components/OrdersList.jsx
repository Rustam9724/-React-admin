function OrdersList() {
    return (
        <div className="orders-list">
            <h2>Заказы</h2>
                <div className="orders-list__search">
                    <input type="text" placeholder="Поиск"/>
                </div>
            <div className="orders-list__main">
                <div className="orders-list__main__header">
                    <div className="orders-list__main__header__section">
                        <p># ЗАКАЗА</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>СТОЛ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>СУММА, РУБ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ДАТА СОЗДАНИЯ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>Последнее изменение</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="orders-list__main__list">
                    <div className="meels-and-drinks__main__list__wrapper">
                        <div classname="orders-list__main__list__order">
                            <div># 2232</div>
                            <div>12</div>
                            <div>454</div>
                            <div className="orders-list__main__list__order__status-expects">Ожидает</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 6977</div>
                            <div>2</div>
                            <div>631</div>
                            <div className="orders-list__main__list__order__status-accepted">Принят</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 9750</div>
                            <div>39</div>
                            <div>751</div>
                            <div className="orders-list__main__list__order__status-completed">Завершён</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 2374</div>
                            <div>32</div>
                            <div>145</div>
                            <div className="orders-list__main__list__order__status-getready">Готовится</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 636</div>
                            <div>4</div>
                            <div>182</div>
                            <div className="orders-list__main__list__order__status-сanceled">Отменён</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 7452</div>
                            <div>43</div>
                            <div>749</div>
                            <div className="orders-list__main__list__order__status-expects">Ожидает</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 5070</div>
                            <div>42</div>
                            <div>605</div>
                            <div className="orders-list__main__list__order__status-accepted">Принят</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 8484</div>
                            <div>2</div>
                            <div>447</div>
                            <div className="orders-list__main__list__order__status-accepted">Принят</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 7213</div>
                            <div>30</div>
                            <div>749</div>
                            <div className="orders-list__main__list__order__status-accepted">Принят</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                        <div className="orders-list__main__list__order">
                            <div># 4105</div>
                            <div>8</div>
                            <div>574</div>
                            <div className="orders-list__main__list__order__status-accepted">Принят</div>
                            <div>28.04.2023, 10:21</div>
                            <div>28.04.2023, 10:21</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList;