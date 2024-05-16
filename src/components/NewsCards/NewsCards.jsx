import React from 'react'
import style from './NewsCards.module.scss'
import { Link } from 'react-router-dom'
function NewsCards() {
    const news = [
        { id:1, title: 'Новые коробки завезли в Куликовский'},
        { id:2, title: 'Узнай какой у тебя угандийский знак зодиака'},
        { id:3, title: 'Тройное солнечное затмение будет сегодня ночью'},
        { id:4, title: 'Виды змей которые безопасны описал биолог'},
        { id:5, title: 'Термоядераня война уже этим летом?'},
        { id:6, title: 'React на React: будет ли быстрее?'}
    ]
    return (
       <div className={style.news}>
        {news.map((el)=>(
            <div className={style.new} key={el.id}> 
<Link to={`/news/${el.id}/${el.title}`}>{el.title}</Link>
                </div>
        ))}
       </div>
    )
}

export default NewsCards
