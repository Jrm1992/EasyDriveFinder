'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ShowMore } from "@/types/showMore.interface";

export default function ShowMore({ pageNumber, isNext }: ShowMore) {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname, {scroll: false});
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