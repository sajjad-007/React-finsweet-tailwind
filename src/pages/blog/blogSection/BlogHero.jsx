import React from 'react'
import Peragraph from '../../../components/peragraph/Peragraph'
import Image from '../../../components/Image'
import BlogHeroImg from '../../../assets/images/blog/blog_hero.png'
import { Link } from 'react-router-dom'

const BlogHero = () => {
    let head1 ="A UX Case Study on Creating a Studious Environment for Students"
    let pera1 = "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
  return (
    <div className='py-32'>
        <div className="w-container my-0 mx-auto">
            <div className="hero_wrapper flex flex-col gap-9">
                <div className="content1 flex flex-col items-center justify-center gap-4">
                    <h2 className='heading2 w-[949px] text-center mx-auto  text-dark-blue'>{head1}</h2>
                    <div className='flex gap-3'>
                        <Peragraph className='label2 capitalize text-dark-blue' text='andrew jonson'/>
                        <Peragraph className='label2 capitalize text-dark-blue' text='Posted on 27th January 2021'/>
                    </div>
                </div>
                <div className="img_section w-full h-[477px] overflow-hidden">
                    <Image className='h-full w-full object-cover bg-no-repeat' source={BlogHeroImg} alt='not found'/>
                </div>
                <div className="content2 flex flex-col gap-4 items-center justify-center">
                    <Peragraph className='pera w-[831px] text-center mx-auto' text={pera1}/>
                    <Link className='Label1 capitalize'>read more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogHero