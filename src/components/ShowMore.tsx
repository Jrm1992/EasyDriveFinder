import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils/updateSearchParams";

export default function ShowMore({ pageNumber, isNext }: any) {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
      <Button
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    )}
  </div>
  )
}