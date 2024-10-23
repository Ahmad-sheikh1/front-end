import { IoWalletOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { PiWalletBold } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";
export const stats = [
  {
    id: 1,
    icon: IoWalletOutline, // Update with the correct image import or URL
    label: "Wallet Balance",
    amount: "$3,567.80",
    bgColor: "bg-pink-500", // Tailwind background color
  },
  {
    id: 2,
    icon: BsWallet2, // Use proper icon
    label: "Referral Earning",
    amount: "$1,589.53",
    bgColor: "bg-purple-500",
  },
  {
    id: 3,
    icon: PiWalletBold,
    label: "Estimate sales",
    amount: "$2,651.50",
    bgColor: "bg-indigo-500",
  },
  {
    id: 4,
    icon: BiWallet,
    label: "Earning",
    amount: "$53,567.54",
    bgColor: "bg-blue-400",
  },
];
