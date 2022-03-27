import React from 'react'
import './Front.scss'
import { motion } from 'framer-motion'
import image from '../../img/icons.png'

const Front = () => {
    return (
        <div className='cnt'>
            <div className='text-cnt'>
                <div className='header-cnt'>
                    <h1>tv+</h1>
                    <div className='btn-cnt'>
                        <button>Prova</button>
                        <p>Inizia la prova gratuita</p>
                    </div>

                </div>
                <div className='space'></div>
                <div className='para-cnt'>
                    <p className='light'>Guarda gli Apple Original dalle menti più creative del cinema e della TV, con Jared Leto,
                        Anne Hathaway, Denzel Washington e Samuel L. Jackson. Nuove uscite mensili, inclusi
                        programmi originali con Nicole Kidman, Cynthia Erivo e Elisabeth Moss.</p>

                    <p className='bold'>Nuove produzioni ogni mese. <br />
                        Condividi con la tua famiglia. <br />
                        Guarda online e offline.</p>

                </div>
            </div>

        </div>
    )
}

export default Front