// sidebar imports
import {
    UilEstate,
    UilClipboard,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,
    UilSignOutAlt
} from '@iconscout/react-unicons';
import img1 from '../imgs/digGirlCap.jpg';
import img2 from '../imgs/digitalElephants.jpg';
import img3 from '../imgs/download1.jpg';

// sidebar data
export  const SidebarData = [
    {   icon: UilEstate,
        heading: "Dashboard", 
        path:'/',
    },
    {   icon: UilUsersAlt,
        heading: "User", 
        path:'/user',
    },
    {   icon: UilPackage,
        heading: "Product", 
        path:'/product',
    },
    {   icon: UilChart,
        heading: "Category", 
        path:'/category',
    },
    {   icon: UilClipboard,
        heading: "Order", 
        path:'/order',
    },
    {   icon: UilClipboard,
        heading: "Payment", 
        path:'/payment',
    },
];

export const CardsData = [
    {
        title: "Sold items",
        color: {
            backGround: "#FAACA8",
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value: "25,970",
        png:UilUsdSquare,
        series:[
            {
                name: "Sold items",
                data: [10, 100 , 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: " Products",
        color: {
            backGround: "#F7CE90",
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 80,
        value: "25,970",
        png:UilMoneyWithdrawal,
        series:[
            {
                name: "Products",
                data: [10, 100 , 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "#A9C9FF",
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 60,
        value: "25,970",
        png:UilClipboard,
        series:[
            {
                name: "Expenses",
                data: [10, 100 , 50, 70, 80, 30, 40],
            },
        ],
    },
]
// updates data
export const UpdatesData =[
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered an ink drawing",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "Thomas Shelby",
        noti: "has ordered a digital drawing",
        time: "10 seconds ago",
    },
    {
        img: img3,
        name: "Chrisrina Johnson",
        noti: "The sketch has been delivered to Chris Tiggens ",
        time: "15 minutes ago",
    },
]
//UserPage
