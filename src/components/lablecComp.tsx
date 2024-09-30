type Props = {

    author: string,
    date: string,
    timeSpent: string,
    AI_usage: string

}


export function Lablec(MyData: Props) {

    return (


        <>
            <footer>
                <p> {MyData.author} </p>
                <p> {MyData.date} </p>
                <p> {MyData.timeSpent}</p>
                <p>{MyData.AI_usage}</p>
            </footer>


        </>


    )


}