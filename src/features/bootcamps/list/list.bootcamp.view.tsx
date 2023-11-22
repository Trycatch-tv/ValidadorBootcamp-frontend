import { FC } from 'react'
import CardBootcampContainer from '../card/card.bootcamp.container'

interface Props {
    bootcamps: any
}   
const ListBootcampView:FC<Props> = ({bootcamps}) => {
    return (
        <div className="flex flex-wrap gap-4 mt-16">
            {bootcamps.map((bootcamp:any) => (
                <CardBootcampContainer bootcamp={bootcamp} />
            ))}
        </div>
    )
}

export default ListBootcampView
