import React, { useEffect, useState } from 'react'
import style from './Posts.module.scss'
import { Link } from 'react-router-dom'
function Posts() {

    const [styles, setStyles] = useState('descr')

    const changeStyle = () => {
        console.log("you just clicked");
        if (styles !== "descr") setStyles("descr");
        else setStyles("descr2");}
    
        const posts = [
        { id:1, userId:1, username: 'zor', descr: 'Новые коробки завезли в Куликовский', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'},
        { id:2, userId:2, username: 'anechka1990', descr: 'Узнай какой у тебя угандийский знак зодиака', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'},
        { id:3, userId:2, username: 'anechka1990', descr: 'Пользователи соцсетей из Испании и Португалии размещают в соцсетях видео со вспышкой в ночном небе. На кадрах видно, как в небе над Испанией и Португалией появляется свечение синего оттенка. По первым данным, в субботу вечером в небе над Испанией и Португалией был замечен метеор. Бесчисленные видеоролики, опубликованные в соцсети X, показали, как метеор пронесся по небу. В одном из роликов женщина припарковалась на обочине дороги, когда метеор пролетал над небом, в других - музыкальные фестивали и люди, разбившие палатку на холме, чтобы посмотреть на пролетающий метеор. В одном из видеороликов автомобиль ехал по шоссе в Португалии, когда в небе появилось белое свечение с синим оттенком. «На данный момент не подтверждено, упала ли она на поверхность Земли, однако, по некоторым данным, она могла упасть недалеко от города Кастро-Дайре. По другим данным, он находился ближе к Пиньейру», - говорится в сообщении портала. Эти два населенных пункта находятся на расстоянии 309 километров друг от друга. Пожарные проверяют многочисленные сообщения о месте падения, но по состоянию на 2 часа ночи по местному времени ничего не смогли найти, сообщает Publico.', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'},
        { id:4, userId:3, username: 'kolobok', descr: 'Виды змей которые безопасны описал биолог', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'},
        { id:5, userId:5, username: 'h554jd', descr: 'Термоядераня война уже этим летом?', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'},
        { id:6, userId:4, username: 'user1', descr: 'React на React: будет ли быстрее?', img: 'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'}
    ]

    // useEffect (
    //     changeStyle, [styles]
    // )
    return (
       <div className={style.posts}>
        <img src={'https://th.bing.com/th/id/OIG1.0dc3S0U4IOW684Mabpkz'} alt="ddd" />
        {posts.map((el)=>(
            <div className={style.new} key={el.id}>
                <img src={`${el.img}`} alt="aaa" /> 
<div className={style.descr__div} onClick={changeStyle}><p className={style[styles]}>{el.descr}</p><span className={style.more}>Еще...</span></div>

                </div>
        ))}
       </div>
    )
}

export default Posts
