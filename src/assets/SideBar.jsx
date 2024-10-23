import { IoMdHome } from "react-icons/io";
import { MdWidgets } from "react-icons/md";
import { FaSignal } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import { FaCartShopping } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";


export const SideBar = [
  {
    icon: IoMdHome,
    li: "Home",
  },
  {
    icon: MdWidgets,
    li: "Dashboard",
  },

  {
    icon: FaSignal,
    li: "Sales",

    subarray: [
      {
        sub1: "Quotation",
      },
      {
        sub4: "Invoice",
      },

      {
        sub6: "Return",
      },
    ],
  },
  {
    icon: FaCartShopping,
    li: "Purchases",
    subarray: [
      {
        sub1: "Order",
      },
      {
        sub4: "Invoice",
      },

      {
        sub6: "Return",
      },
    ],
  },
  {
    icon: FaRegEdit,
    li: "POS",
    subarray: [
      {
        sub1: "Checkout Counter",
      },
      {
        sub4: "Delivery Counter",
      },
    ],
  },
  {
    icon: IoBarChartSharp,
    li: "Inventory",
    subarray: [
      {
        sub1: "Stock Movement",
      },
      {
        sub4: "Stock Adjustment",
      },
    ],
  },
  {
    icon: IoDocumentText,
    li: "Reports",
  },
];
