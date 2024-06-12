import { UserController } from "@/controllers/user/user.controller";
import type { ReviewModel } from "@/models/review.model";
import type { UserModel } from "@/models/user.model";
import { type FC, useEffect, useState } from "react";
import CardReviewView from "./card.review.view";

interface Props {
  review: ReviewModel;
}

const CardReviewContainer: FC<Props> = ({ review }) => {
  const [user, setUser] = useState<UserModel>(new Object() as UserModel);
  const userController = new UserController();
  const getUser = async (id = "") => {
    const user = await userController.findOne(id);
    setUser(user);
  };

  useEffect(() => {
    getUser(review.user_id);
  }, [review.user_id]);

  return (
    <>
      <CardReviewView review={review} user={user} />
    </>
  );
};

export default CardReviewContainer;
