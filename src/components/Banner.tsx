'use client'
import Image from 'next/image';
import styles from './banner.module.css';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Banner() {

    const [index, setIndex] = useState(0);
    const router = useRouter();

    return (
        <div className={styles.banner} onClick={() => setIndex((index+1)%4)}>
            <Image 
            src={`/img/cover${index==0?"":`${index+1}`}.jpg`}
            alt="Banner"
            fill={true}
            style={{objectFit:"cover"}}/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif' style={{marginTop:"8px"}}>Looking for the perfect venue for your next event? We offer a spacious and well-equipped venue for all types of gatherings, including weddings, corporate events, birthday parties, and more.</h3>
            </div>
            <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent" 
            onClick={(e) => {
                e.stopPropagation();
                router.push('/venue');
            }}>
                Select Venue
            </button>
        </div>
    )
}