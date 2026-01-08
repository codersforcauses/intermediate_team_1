import { PetHeader } from "@/components/ui/pet-page-header";
import { TaskCarousel } from "@/components/ui/pet-task-carousel";
import { TextTitle } from "@/components/ui/text-styles";
import { dm_sans } from "@/lib/fonts";

export default function Default() {
  return (
    <div className={dm_sans.className}>
      <h1 className="flex justify-center p-10"> Navbar </h1>
      <PetHeader
        onClickTask={() => "state function here"}
        onClickSettings={() => "state function here"}
        petImg=""
        petAlt="Spaghetti's Profile Image"
        petInit="S"
        petName="Spaghetti (example pet)"
        petType="Cat"
        petAge="5 yrs 6 months"
      />

      <div className="mx-[7vw] mt-5">
        <TextTitle className="text-3xl"> Upcoming Tasks </TextTitle>
        <div className="flex justify-center md:mx-0">
          <TaskCarousel />
        </div>
      </div>
    </div>
  );
}
