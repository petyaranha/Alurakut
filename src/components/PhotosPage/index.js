import React from 'react';
import Link from 'next/link';

export default function PhotosPage() {
    
    return (
      <>
        <div  className="container" type="container" 
              style={{flex: 1, height: 140, flexDirection: 'row', textAlign: 'center', padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
               <div style={{ width: 160, display: 'inline-block', paddingLeft: 40, paddingRight: 40, paddingtop: 30}}>
               <img src={`94df266c-109d-4c4f-b3da-2f962e1ff43a.jpeg`} style={{ borderRadius: '8px', width: 85, height: 85}} />
               </div>
               <div style={{ width: 160, display: 'inline-block', paddingLeft: 40, paddingRight: 40, paddingtop: 30}}>
               <img src={`8481cce8-bab4-483e-95da-1812f38835d9.jpeg`} style={{ borderRadius: '8px', width: 85, height:85 }} />
               </div>
               <div style={{ width: 160, display: 'inline-block', paddingLeft: 40, paddingRight: 40, paddingtop: 30}}>
               <img src={`a5263930-54bb-4d7b-aa95-bd264a23bbda.jpeg`} style={{ borderRadius: '8px', width: 85, height: 85 }} />
               </div>
                       {/* <h1 className="title" style={{textColor: 'black', fontWeight: 'bold', fontSize: 14}}>
                Bete Aranha, "https://github.com/petyaranha.png"
            </h1>
            <i>Analista de Informática</i> */}
            <hr/>
            
            <Link href="/">
                <button>Home</button>
            </Link>
         </div>          
      
    </>
       
    )
    
}
