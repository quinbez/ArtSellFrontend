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

// sidebar data
export  const SidebarData = [
    {    icon: UilEstate,
        heading: "Dashboard", 
    },
    {    icon: UilUsersAlt,
        heading: "User", 
    },
    {    icon: UilPackage,
        heading: "Product", 
    },
    {    icon: UilChart,
        heading: "Category", 
    },
    {    icon: UilClipboard,
        heading: "Order", 
    },
    {    icon: UilClipboard,
        heading: "Payment", 
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
];