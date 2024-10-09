import { Navigation } from "../UI/Navigation"

export default function Header() {
    const navigation = [
        {
            link: '/main',
            title: 'Главная'
        },
        {
            link: 'news',
            title: 'Новости',
        },
        {
            link: '/',
            title: 'Выход'
        }
    ]


    return (
        <>
            <header>
                <Navigation navigation={navigation} />
            </header>
        </>
    )
}