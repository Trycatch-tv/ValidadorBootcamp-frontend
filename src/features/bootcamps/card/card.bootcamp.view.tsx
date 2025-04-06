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
import { Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating"

interface Props {
  bootcamp: Partial<BootcampModel>
}
const CardBootcampView: FC<Props> = ({ bootcamp }) => {
  return (
    <>
      <Card className=" mb-4 min-w-[300px] max-w-[300px]">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle className="text-lg">{bootcamp.name}</CardTitle>
          <Rating
            initialValue={bootcamp.score}
            size={20}
            readonly={true}
            allowFraction={true}
            fillColor={"#fcc11e"}
            emptyColor={"#e4e4e7"}
            transition
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
    </>
  )
}

export default CardBootcampView
