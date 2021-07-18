import React from 'react';
import Link from 'next/link';

export default function MessagePage() {
    
    return (
        <>
        <div  className="container"
              type="container" 
              style={{flex: 1, height: 130, flexDirection: 'row', textAlign: 'center', padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
            
            <h1 className="title" style={{textColor: 'black', fontWeight: 'bold', fontSize: 14}}>
                Obrigada, Alura e instrutores (todos são Top)
            </h1>

            <i>Agora, é continuar com a mão na massa: completar e refatorar o código!</i>

            <hr/>
            
            <Link href="/">
                <button>Home</button>
            </Link>
                   
        </div>  
        
        </>
    )
    
}
