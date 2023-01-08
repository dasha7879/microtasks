type NewComponentType = {
    money: Array<Banknota>
    filter: FilterType
}

type Banknota = {
    banknots: string
    value: number
    number: string
}

type FilterType='all'|'Dollars'|'RUBLS'


export const NewComponent = (props:NewComponentType) => {
const {filter, money} = props;
let currentMoney = money.filter((oneBanknote)=> oneBanknote.banknots === filter || filter === 'all');



    return (
        <ul>
            {currentMoney.map((oneBanknote, index: number) => {
                return (
                    <li key={index}>
                        <span>{oneBanknote.banknots}</span>
                        <span>{oneBanknote.number}</span>
                        <span>{oneBanknote.value}</span>
                    </li>
                )
            }
            )
            }
        </ul>
    )
}