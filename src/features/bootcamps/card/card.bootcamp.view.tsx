import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { Star } from 'lucide-react'
import {FC} from 'react'
import { Link } from 'react-router-dom'

interface Props {
    bootcamp:any
}
const CardBootcampView:FC<Props> = ({bootcamp}) => {
    return (
        <Card  className=" mb-4 max-w-[300px]">
            <CardHeader className='flex-row justify-between'>
                <CardTitle className="text-lg">
                    {bootcamp.name}
                </CardTitle>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(() => (
                        <Star className='h-4 w-4 text-gray-500'/>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="card-body">
               <p className='whitespace-break-spaces text-gray-400 text-xs'>{bootcamp.description}</p>
            </CardContent>
            <CardFooter className="card-footer">
                <Link to={`/bootcamp/${bootcamp.id}`}>
                    <Button size={"sm"} className="text-xs">
                        Ver mas info
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default CardBootcampView
