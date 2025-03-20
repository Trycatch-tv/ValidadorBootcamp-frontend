import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui"
import { BootcampModel } from "@/models/bootcamp.model"
import { FC } from "react"
import Rating from "react-rating-stars-component"
import { Link } from "react-router-dom"

interface Props {
  bootcamp: Partial<BootcampModel>
}
const CardBootcampView: FC<Props> = ({ bootcamp }) => {
  return (
    <Card className=" mb-4 min-w-[300px] max-w-[300px]">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-lg">{bootcamp.name}</CardTitle>
        <Rating
          count={5}
          value={bootcamp.score}
          size={16}
          isHalf={true}
          activeColor="#fcc11e"
          edit={false}
        />
      </CardHeader>
      <CardContent className="card-body min-h-[70px] ">
        <p className="whitespace-break-spaces text-gray-400 text-xs">
          {bootcamp.description}
        </p>
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
