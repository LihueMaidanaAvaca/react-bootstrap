import React from 'react'
import Card from './Card.jsx'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 0,
        title: 'Lihue Web',
        image: image1,
        url: 'https://simplefolio-lihuemaidanaavaca.vercel.app/'
    },
    {
        id: 1,
        title: 'Lihue Linkedin',
        image: image2,
        url: 'https://www.linkedin.com/in/lihue-maidana-avaca/'
    },
    {
        id: 2,
        title: 'Lihue Github',
        image: image3,
        url: 'https://github.com/LihueMaidanaAvaca'
    }
] 

function Cards() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                    <Card title={card.title} imageSource={card.image} url={card.url}/>
                </div>    
                    ))
                }            
            </div>
        </div>

    )
}

export default Cards