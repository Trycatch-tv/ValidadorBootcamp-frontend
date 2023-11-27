import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { FC } from "react"
import { Link } from 'react-router-dom'

interface Props {
    panel: any
}

const PanelBackofficeView:FC<Props> = ({panel}) => {
    return(
        <Link to={`/${panel.route}`}>
            <Card className="flex flex-col place-content-center p-6 mb-4 min-w-[400px] min-h-[200px]">
                <CardContent className='flex-row justify-center p-0' >
                    <CardTitle className="text-xl text-center" >
                        {panel.title}
                    </CardTitle>
                </CardContent>      
            </Card>  
        </Link>
    )
}

export default PanelBackofficeView