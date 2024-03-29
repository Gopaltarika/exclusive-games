import React from 'react'
import silver from "../assets/images/silver-img.webp";
import double from "../assets/images/double-tick.svg";
import platinum from "../assets/images/platinum-img.webp";
import Simplebtn from './Simplebtn';
import firstcard from "../assets/images/a-card.webp";
import secondcard from "../assets/images/a-card2.webp";
import dice from "../assets/images/dice.webp";
import pokerellipis from "../assets/images/poker-ellipis.webp";
import ellipis1 from "../assets/images/platinum-ellipis.svg";
import ellipis2 from "../assets/images/platinum-ellipis2.svg";

import Designbtn from './Designbtn';
const Poker = () => {
    return (
        <div className='overflow-x-clip relative'>
            <img className='absolute top-[50%] left-0' src={ellipis1} alt="ellipis" />
            <img className='absolute right-0 bottom-[-27%]' src={ellipis2} alt="ellipis" />
            <div className="max-w-[1140px] mx-auto relative z-[2] px-3" id="offer">
                <h2 className='text-white font-Anton font-normal sm:text-[35px] text-[28px] md:text-[48px] leading-[57px] text-center' data-aos="fade-down">Nuestras ofertas</h2>
                <p className='text-white font-Inter pt-4 pb-[20px] sm:pb-[60px] font-medium leading-[20px] sm:leading-[25px] text-[14px] sm:text-[16px] text-center opacity-80' data-aos="fade-down">Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className="w-full border-[0.5px] border-white px-5 bg-[#051D23] rounded-[16px]">
                    <div className="flex flex-wrap flex-row -mx-3 pt-[57px] pb-[32px] items-center">
                        <div className="lg:w-7/12 w-full px-3">
                            <img className='w-full' src={silver} alt="silver-img" data-aos="fade-down" />
                        </div>
                        <div className="lg:w-5/12 w-full px-3">
                            <h4 className='text-white text-[24px] sm:text-[32px] font-Anton font-normal leading-[41px] max-md:pt-5' data-aos="fade-up">Silver</h4>
                            <p className=' font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-white pt-4 opacity-80' data-aos="fade-up">Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className='sm:pt-[32px] pt-[20px] font-Anton font-normal sm:text-[35px] text-[28px] md:text-[48px] leading-[57px] text-white' data-aos="fade-up">$5000</p>
                            <div className="flex pt-4 items-start gap-2" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2 pb-[40px]" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div data-aos="fade-up">
                                <Simplebtn simple="Comprar ahora" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 my-[45px] sm:my-[64px] border-[0.5px] relative bg-[url(./assets/images/luxury-bg.webp)] bg-100 bg-no-repeat h-full border-white bg-[#051D23] rounded-[16px] py-[45px] flex items-center flex-col">
                    <img className='absolute top-[5%] sm:top-[13%] left-[2%] max-sm:max-w-[60px] sm:left-[5%] md:left-[12%] lg:left-[20%]' src={pokerellipis} alt="poker" />
                    <img className='absolute bottom-[8%] sm:bottom-[13%] left-[3%] sm:left-[8%] lg:left-[15%] max-w-[50px] sm:max-w-[80px] md:max-w-[156px] min-h-[50px] sm:min-h-[80px] md:min-h-[156px]' src={secondcard} alt="secondcard" />
                    <img className=' max-w-[50px] sm:max-w-[100px] min-h-[50px] sm:min-h-[100px] lg:max-w-[149px] lg:min-h-[150px] absolute top-[5%] sm:top-[13%] right-[5%] md:right-[13%]' src={firstcard} alt="firstcard" />
                    <img className='max-w-[66px] min-h-[69px] absolute bottom-[4%] sm:bottom-[13%] right-[0%] sm:right-[13%]' src={dice} alt="dice" />
                    <div className='max-w-[419px]'>
                        <h4 className='text-white text-[25px] sm:text-[32px] font-Anton font-normal leading-[41px] text-center' data-aos="fade-up">Luxury</h4>
                        <p className='font-Inter font-medium text-[14px] sm:text-[16px] leading-[25px] text-white pt-4 text-center opacity-80' data-aos="fade-up">lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='text-white font-Anton font-normal sm:text-[35px] text-[28px] md:text-[48px] md:leading-[57px] text-center pt-5 sm:pt-8 pb-4' data-aos="fade-up">$9000</h2>
                        <div className="flex items-start gap-2" data-aos="fade-right">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white  text-center opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white text-center opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3" data-aos="fade-right">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white text-center opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white text-center opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pt-3 pb-9" data-aos="fade-right">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] text-white text-center opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center' data-aos="fade-left">
                            <Designbtn design="Comprar ahora" />
                        </div>
                    </div>
                </div>
                <div className="w-full border-[0.5px] px-[40px] py-[38px] border-white bg-transparent rounded-[16px]">
                    <div className="flex flex-wrap flex-row max-md:flex-col-reverse -mx-3 justify-between items-center">
                        <div className='md:w-5/12 w-full px-3 max-w-[364px]'>
                            <h4 className='text-white text-[25px] sm:text-[32px] font-Anton font-normal leading-[41px] max-md:text-center max-md:pt-5' data-aos="fade-up">Platinum</h4>
                            <p className='font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 opacity-80 max-md:text-center' data-aos="fade-up">Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className='text-white font-Anton font-normal sm:text-[35px] text-[28px] md:text-[48px] leading-[37px] md:leading-[57px] pt-8 pb-4 max-md:text-center' data-aos="fade-up">Consultar precio</h2>
                            <div className="flex items-start gap-2 max-md:text-center max-md:justify-center" data-aos="fade-up">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center pb-[40px] opacity-80' data-aos="fade-up">Personalizable</p>
                            </div>
                            <div className='max-md:flex justify-center' data-aos="fade-up">
                                <Simplebtn simple="Comprar ahora" />
                            </div>
                        </div>
                        <div className="md:w-7/12 w-full px-3" data-aos="fade-down">
                            <img className='w-full' src={platinum} alt="platinum" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poker
