import { nanoid } from 'nanoid';

const categoriesList = [
    {
        id: nanoid(),
        name: 'Первая категория',
        status: true,
        lastChange: '20.01.2023, 00:00',
        order: 1,
        isEdit: false,
    },
    {
        id: nanoid(),
        name: 'Вторая категория',
        status: false,
        lastChange: '20.01.2023, 00:00',
        order: 2,
        isEdit: false,
    },
    {
        id: nanoid(),
        name: 'Третья категория',
        status: true,
        lastChange: '20.01.2023, 00:00',
        order: 3,
        isEdit: false,
    },
]

const meelsAndDrinksList = [
    {
        id: nanoid(),
        name: 'Первое блюдо',
        status: true,
        lastChange: '20.01.2023, 00:00',
        order: 1,
        isEdit: false,
        price: 550,
    },
    {
        id: nanoid(),
        name: 'Второе блюдо',
        status: true,
        lastChange: '20.01.2023, 00:00',
        order: 1,
        isEdit: false,
        price: 550,
    },
    {
        id: nanoid(),
        name: 'Третье блюдо',
        status: false,
        lastChange: '20.01.2023, 00:00',
        order: 1,
        isEdit: false,
        price: 550,
    },
]

export { categoriesList, meelsAndDrinksList };