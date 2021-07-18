import React from 'react';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { MainGrid } from '../src/components/MainGrid'
//import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import ProfilePage from '../src/components/ProfilePage'
//import axios from 'axios'

//import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
//import { Box } from '../src/components/Box';
//import { MainGrid } from '../src/components/MainGrid'
//import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
//import ProfilePage from '../src/components/ProfilePage'

// function ProfileSidebar(props) {

//     return (
//         <Box as="aside">
//             <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
//             <hr />

//             <p>
//                 <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
//                     @{props.githubUser}
//                 </a>
//             </p>
//             <hr />

//             <AlurakutProfileSidebarMenuDefault />
//         </Box>
//     );
// }

export default function Profile() {
  
    return (
               <>   
                {/*   <>//<AlurakutMenu />
                //<MainGrid>
                    //<div className="profileArea" style={{ gridArea: 'profileArea' }}>
                    //</div> 
                    //<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>*/}
                    <div>
                        <ProfilePage githubUser='https://github.com/petyaranha.png' />
                    </div>
                {/* //</MainGrid>*/}
            </> 
        )
    }
        //<>
        //<ProfilePage/>
            {/* <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: 'profileArea' }}>
                    <ProfileSidebar githubUser={gitUser}/>
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
                    <ProfilePage githubUser={gitUser}/>
                   
                </div>
            </MainGrid> */}
        //</>
//    )
//}
       
  