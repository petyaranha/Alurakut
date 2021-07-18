import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons'
import { Box } from '../Box'
//import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'

export default function ProfilePage(props) {

    return (
        <>
        <div  className="container" type="container" 
        style={{flex: 1, height: 10, textAlign: 'center', padding: 16, justifyContent: 'space-between', alignItems: 'center'}}>
            
            <h1 className="title">
                Bete Aranha, @{props.githubUser}
            </h1>

            <hr />
            <div id="container" style={{display: 1, width: 20}}>
            </div>
            <div className="profile-phrase" style={{textColor: 'black', fontWeight: 'bold'}}>
                <i>Analista de Informática</i>
            </div>
            <hr />
            
            </div>
            <div className="container" type="container" 
        style={{flex: 1, backgroundColor: 'white', marginTop: 350, height: 120, textAlign: 'center', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
            <OrkutNostalgicIconSet recados="5" fotos="10" fas="1" videos="0" mensagens="10" sexy="3" confiavel="3" />
            <hr />
            {/* <h3 style={{padding: 10}}>
                <hr/>
                <hr/>
                <hr/>
             <Link href="/">
                <button>Home</button>
            </Link> 
            </h3> */}
            </div>
            <div style={{marginLeft: '50%', paddingTop: 20, alignItens: 'center'}}>
            <Link href="/">
                <button>Home</button>
            </Link>
            </div>
            </>
    
    )
}