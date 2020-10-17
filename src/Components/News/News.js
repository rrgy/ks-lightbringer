import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './news.css'


const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('api/news').then(res => {
            setNews(res.data)
            // console.log(res.data)
        })
    }, [])
    
    return(
        <div className='news_content'>
            <div className='news'>
                {news.map((el, i) => {
                    return <div key={i} className='news_item'>{el.title}</div>
                })}
            </div>
        </div>
    )
}

export default News