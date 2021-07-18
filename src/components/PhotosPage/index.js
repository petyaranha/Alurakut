import React from 'react';
import Link from 'next/link';

export default function PhotosPage() {
    
    return (
        <>
        <div  className="container"
              type="container" 
              style={{flex: 1, height: 100, flexDirection: 'row', textAlign: 'center', padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
            
            <h1 className="title" style={{textColor: 'black', fontWeight: 'bold', fontSize: 14}}>
                Bete Aranha, "https://github.com/petyaranha.png"
            </h1>
            <i>Analista de Informática</i>
            <hr/>
            
            <Link href="/">
                <button>Home</button>
            </Link>
                   
        </div>  
    
        </>
    )
    
}
