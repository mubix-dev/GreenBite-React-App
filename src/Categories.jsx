import { Coffee, Grid3x3,UtensilsCrossed,Hamburger,Soup,HandPlatter } from "lucide-react";

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <Grid3x3 size={60} />,
    },
    {
        id:2,
        name:"Breakfast",
        icon:<Coffee size={60}/>,
    },
    {
        id:3,
        name:"Tradistional",
        icon:<UtensilsCrossed size={60}/>
    },
    {
        id:4,
        name:"Fast food",
        icon:<Hamburger size={60}/>
    },
    {
        id:5,
        name:"Soup",
        icon:<Soup size={60} />
    },
    {
        id:6,
        name:"Pasta",
        icon:<HandPlatter size={60} />        
    }
]

export default Categories;