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
        isNameEdit: false,
        isPriceEdit: false,
        price: 550,
    },
    {
        id: nanoid(),
        name: 'Второе блюдо',
        status: true,
        lastChange: '20.01.2023, 00:00',
        isNameEdit: false,
        isPriceEdit: false,
        price: 550,
    },
    {
        id: nanoid(),
        name: 'Третье блюдо',
        status: false,
        lastChange: '20.01.2023, 00:00',
        isNameEdit: false,
        isPriceEdit: false,
        price: 550,
    },
]

const waiters = [
    {
        id: nanoid(),
        name: "Marcelino Perello",
        tables: [1, 20, 24],
    },
    { 
        id: nanoid(),
        name: "Diego Rolan",
        tables: [],
    },
    {
        id: nanoid(),
        name: "Kristina Lilley",
        tables: [],
    },
    {
        id: nanoid(),
        name: "Dmitry Aleksidze",
        tables: [],
    },
    {
        id: nanoid(),
        name: "Lev Footlik",
        tables: [15],
    },
    {
        id: nanoid(),
        name: "Pierre Laffitte",
        tables: [],
    }
]

const orders = [
    {
        id: nanoid(),
        number: 2232,
        table: 12, 
        status: 'expects',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 6977,
        table: 2, 
        status: 'accepted',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 9750,
        table: 39, 
        status: 'completed',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 2374,
        table: 32, 
        status: 'getready',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 636 ,
        table: 4, 
        status: 'canceled',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 7452,
        table: 43, 
        status: 'expects',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 5070,
        table: 42, 
        status: 'accepted',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 8484,
        table: 2, 
        status: 'accepted',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 7213,
        table: 30, 
        status: 'accepted',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    },
    {
        id: nanoid(),
        number: 4105,
        table: 8, 
        status: 'accepted',
        date: '28.04.2023, 16:33',
        lastChange: '28.04.2023, 16:33',
        cost: 550,
    }
]

export { categoriesList, meelsAndDrinksList, waiters, orders };