import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller";
import { ReviewController } from "@/controllers/review/review.controller";
import type { BootcampModel } from "@/models/bootcamp.model";
import type { ReviewModel } from "@/models/review.model";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBootcampView from "./profile.bootcamp.view";

const ProfileBootcampContainer = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const bootcampController = new BootcampController();
  const reviewController = new ReviewController();

  const [bootcamp, setBootcamp] = useState<BootcampModel>(
    new Object() as BootcampModel,
  );
  const [reviews, setComments] = useState<ReviewModel[]>(
    new Object() as ReviewModel[],
  );

  const [isDialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => setDialogOpen(false);

  const [termsAndConditions, setTermsAndConditions] = useState<string>("");

  const getBootcampAvatar = bootcampController.findOneAvatar(id);
  const getBootcamp = async () => {
    const bootcamp = await bootcampController.findOne(id);
    setBootcamp(bootcamp);
  };

  const getReviews = async () => {
    const reviews = await reviewController.findAllByBootcampId(id);
    setComments(reviews);
  };

  const getTermsAndConditions = () => {
    setTermsAndConditions(bootcampController.findOneTermsAndConditions(id));
  };

  useEffect(() => {
    getBootcamp();
    getReviews();
    getTermsAndConditions();
  }, [id]);

  useEffect(() => {
    if (isDialogOpen === false) {
      getReviews();
    }
  }, [isDialogOpen]);

  return (
    <>
      <ProfileBootcampView
        reviews={reviews}
        bootcamp={bootcamp}
        avatar={getBootcampAvatar}
        termsAndConditions={termsAndConditions}
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        setDialogOpen={setDialogOpen}
      />
    </>
  );
};

export default ProfileBootcampContainer;
