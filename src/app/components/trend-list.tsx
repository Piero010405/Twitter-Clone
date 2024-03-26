import { TrendCard } from './trend-card'

const trends = [
    {
        topic: 'Trending in Peru',
        tittle: 'Yape',
        numberPosts: '10.1K'
    },
    {
        topic: 'Sports · Trending',
        tittle: 'Lamine Yamal',
        numberPosts: '66.6K'
    },
    {
        topic: 'Politics · Trending',
        tittle: 'Corina Yoris',
        numberPosts: '135k'
    },
    {
        topic: 'Sports · Trending',
        tittle: 'Xavi',
        numberPosts: '12.6K'
    },
    {
        topic: 'Only on X · Trending',
        tittle: 'Semana Santa',
        numberPosts: '169K'
    },
    {
        topic: 'Trending in Peru',
        tittle: 'Chistian Cueva',
        numberPosts: '205K'
    }

]

export function TrendList() {
    return (
        <>
            <main className='flex flex-col'>
                {
                    trends.map(({ topic, tittle, numberPosts }) => {
                        return (
                            <TrendCard
                                key={tittle}
                                topic={topic}
                                tittle={tittle}
                                numberPosts={numberPosts}
                            />
                        )
                    })
                }
            </main>
        </>
    )
}
