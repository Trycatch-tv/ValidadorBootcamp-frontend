import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui"
import { ReviewModel } from "@/models/review.model"
import { UserModel } from "@/models/user.model"
import { FC } from "react"

interface Props {
  review: ReviewModel
  user: UserModel
}

const CardReviewView: FC<Props> = ({ review, user }) => {
  return (
    <>
      <Card className="min-w-[250px] max-w-[350px]">
        <CardHeader>
          <div className="flex justify-between">
            <span className="text-[13px] text-muted-foreground">
              {new Date(review.created_at).toLocaleDateString()}
            </span>
            <div className="flex gap-2 flex-row justify-center items-center">
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <span>{review.title}</span>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{review.description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between gap-2">
            <div className="text-[8px] bg-gray-200 p-1 rounded-md">
              <span className="font-bold mr-1">General:</span>
              <span>{review.score_overall}</span>
            </div>
            <div className="text-[8px] bg-gray-200 p-1 rounded-md">
              <span className="font-bold mr-1">Curriculum:</span>
              <span>{review.score_curriculum}</span>
            </div>
            <div className="text-[8px] bg-gray-200 p-1 rounded-md">
              <span className="font-bold mr-1">Job Support:</span>
              <span>{review.score_job_support}</span>
            </div>
            <div className="text-[8px] bg-green-200 p-1 rounded-md">
              <span className="font-bold mr-1">Score:</span>
              <span>{review.score}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default CardReviewView
