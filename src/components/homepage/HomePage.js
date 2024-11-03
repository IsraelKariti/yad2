import { Carousel } from "./Carousel/Carousel"
import { LeadingCategoriesContainer } from "./LeadingCategories/LeadingCategoriesContainer"
import { NewInYourArea } from "./NewInYourArea/NewInYourArea";
import { ComeWork } from "./ComeWork/ComeWork";

export const HomePage = ()=>{
    return <div>
        <Carousel/> 
        <LeadingCategoriesContainer/>
        <NewInYourArea/>
        <ComeWork/>
    </div>
}