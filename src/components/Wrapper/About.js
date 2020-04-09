import React from "react";
import './About.css'
import {Link} from 'react-router-dom'

class Search extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <section className='about'>
                            <div className='about__picture'>
                                <picture>
                                    <source srcSet='./vinyl-record-playing.webp' type='image/webp'/>
                                    <img src='./vinyl-record-playing.jpg'/>
                                </picture>
                            </div>
                        <div className='about__text'>
                            <h2 className='about__header'>Про нас</h2>
                            <p className='about__parag'>Knight Rider, a shadowy flight into the dangerous world of a man who does not exist.
                                Michael Knight, a young loner on a crusade to champion the cause of the innocent,
                                the helpless in a world of criminals who operate above the law.
                            </p>
                        </div>
                    </section>
                </div>
                <section className='about__picture__section'>
                    <picture>
                        <source srcSet='./turntable.webp' type='image/webp'/>
                        <img src='./turntable.webp'/>
                    </picture>
                    <div className='overlay'>
                        <span className='overlay__span'>Example Text</span>

                        <p className='overlay__p'>80 days around the world, no we won’t say a word before the ship is really back.</p>
                    </div>
                </section>
                <div className='container'>
                    <section className='about'>
                        <div className='about__picture'>
                            <picture>
                                <source srcSet='./record-player.webp' type='image/webp'/>
                                <img src='.//record-player.jpg'/>
                            </picture>
                        </div>
                        <div className='about__text'>
                            <h2 className='about__header'>Про нас</h2>
                            <p className='about__parag'>Ulysses, Ulysses — Soaring through all the galaxies.
                                In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny,
                                with all his power, and with all of his might.
                            </p>
                        </div>


                    </section>
                </div>
            </React.Fragment>

        );
    }

}
export default Search