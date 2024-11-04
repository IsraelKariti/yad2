import { Carousel } from "./Carousel/Carousel"
import { LeadingCategoriesContainer } from "./LeadingCategories/LeadingCategoriesContainer"
import { NewInYourArea } from "./NewInYourArea/NewInYourArea";
import { ComeWork } from "./ComeWork/ComeWork";
import { PopularServices } from "./PopularServices/PopularServices";
import { SearchesToNotMiss } from "./SearchesToNotMiss/SearchesToNotMiss";
import { NextJobs } from "./NextJob/NextJobs";


export const HomePage = ()=>{
    return <div>
        <Carousel/> 
        <LeadingCategoriesContainer/>
        <NewInYourArea/>
        <ComeWork/>
        <PopularServices/>
        <SearchesToNotMiss/>
        <NextJobs/>
    </div>
}