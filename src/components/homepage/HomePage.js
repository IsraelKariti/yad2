import { Carousel } from "./Carousel/Carousel"
import { LeadingCategoriesContainer } from "./LeadingCategories/LeadingCategoriesContainer"
import { NewInYourArea } from "./NewInYourArea/NewInYourArea";

export const HomePage = ()=>{
    return <div>
        <Carousel/> 
        <LeadingCategoriesContainer/>
        <NewInYourArea/>
    </div>
}