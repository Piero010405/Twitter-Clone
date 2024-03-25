import { FollowCard } from './follow-card'

const format = (userName: string) => `@${userName}`

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
        formatUserName: format
    },
    {
        userName: 'reddit.com',
        name: 'Mister Reddit',
        isFollowing: false,
        formatUserName: format
    },
    {
        userName: 'pheralb',
        name: 'Pablo Martinez',
        isFollowing: false,
        formatUserName: format
    },
    {
        userName: 'twitter.com',
        name: 'Elon Musk',
        isFollowing: false,
        formatUserName: format
    }
]

export function WhoFollowCard() {
    return (
        <>
            <section className='tw-whoToFollowCard'>
                <header>
                    <h1>Who to follow</h1>
                </header>
                <main>
                    {
                        users.map(({ userName, name, isFollowing, formatUserName }) => {
                            return (
                                <FollowCard
                                    key={userName}
                                    userName={userName}
                                    initialIsFollowing={isFollowing}
                                    formatUserName={formatUserName}
                                >
                                    {name}
                                </FollowCard>
                            )
                        })
                    }
                </main>
            </section>
            <button className="tw-ShowMoreBtn">
                Show more
            </button>
        </>
    )
}

// export function App(){
// const [name, setName] = useState('midudev')

// //?Pasando las PROPS como OBJETOS ... no muy recomendable .. tmb una prop puede ser una funcion
// const midudevObj = { userName: name, formatUserName: format}
// return(
//     <>
//     <section className="App">
//         <TwitterFollowCard {...midudevObj}>
//             Miguel Angel Duran
//         </TwitterFollowCard>

//         <TwitterFollowCard userName='reddit.com' formatUserName={format}>
//             Redit Tarmiento
//             {/* COMENTARIO XD*/}
//         </TwitterFollowCard>

//         <TwitterFollowCard userName='pheralb' formatUserName={format}>
//             Pablo Martinez
//         </TwitterFollowCard>

//         <TwitterFollowCard userName='twitter.com' initialIsFollowing formatUserName={format}>
//             Elon Musk
//         </TwitterFollowCard>

//         {/* <button onClick={()=> setName('pedromichel')}>
//             Cambio de Nombre
//         </button> */}

//     </section>
//     </>
// )
// }
