import React from 'react';
import Link from 'next/link';

export default function DepositionPage(props) {
    
    return (
        <>
        <div  className="container" 
              type="container" 
              style={{flex: 1, height: 130, flexDirection: 'row', textAlign: 'center', padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
            
            <h1 className="title" style={{textColor: 'black', fontWeight: 'bold', fontSize: 14}}>
                Excelente Imersão da Alura, muita enriquecedora!
            </h1>

            <i>Os colegas sempre muito atenciosos com as nossas dúvidas; sem contar que, os projetos estão sensacionais!</i>

            <hr/>
            
            <Link href="/">
                <button>Home</button>
            </Link>
                   
        </div>  
           
        </>
    )
    
}