import { lazy } from "react";

const Overview = lazy(() => import("../Pages/Overview"));
const Tables = lazy(() => import("../Pages/Reports"));
const Quotation = lazy(() => import("../Pages/SalePages/Quotation"));
const Invoice = lazy(() => import("../Pages/SalePages/Invoice"));
const Return = lazy(() => import("../Pages/SalePages/Return"));
const Order = lazy(() => import("../Pages/PurchasePages/Order"));
const PrurchaseInvoice = lazy(() => import("../Pages/PurchasePages/PrurchaseInvoice"));
const PurchaseReturn = lazy(() => import("../Pages/PurchasePages/PurchaseReturn"));
const PosCheck = lazy(() => import("../Pages/PosPages/PosCheck"));
const PosDelivery = lazy(() => import("../Pages/PosPages/PosDelivery"));
const InventoryMovement = lazy(() => import("../Pages/Inventory/InventoryMovement"));
const InventoryAdjust = lazy(() => import("../Pages/Inventory/InventoryAdjust"));
const ListProduc = lazy(() => import("../Pages/SetUpPages/ListProduc"));
const ListUsers = lazy(() => import("../Pages/SetUpPages/ListUsers"));
const ProductCategory = lazy(() => import("../Pages/SetUpPages/ProductCategory"));
const CustomerCategory = lazy(() => import("../Pages/SetUpPages/CustomerCategory"));
const ListVendors = lazy(() => import("../Pages/SetUpPages/Vendors"));
const ListCustomer = lazy(() => import("../Pages/SetUpPages/Customer"));
const GeneralFeilds = lazy(() => import("../Pages/SetUpPages/GeneralFeilds"));
const GeneralTexes = lazy(() => import("../Pages/SetUpPages/GeneralTexes"));
const GeneralWarehouses = lazy(() => import("../Pages/SetUpPages/GeneralWearhouses"));


const AppRoutes = [
    { path: "/dashboard", element: <Overview isOpen={isOpen} /> },
    { path: "/Reports", element: <Tables /> },
    { path: "/sales/quotation", element: <Quotation /> },
    { path: "/sales/invoice", element: <Invoice /> },
    { path: "/sales/return", element: <Return /> },
    { path: "/purchases/order", element: <Order /> },
    { path: "/purchases/invoice", element: <PrurchaseInvoice /> },
    { path: "/purchases/return", element: <PurchaseReturn /> },
    { path: "/POS/checkout-counter", element: <PosCheck /> },
    { path: "/POS/delivery-counter", element: <PosDelivery /> },
    { path: "/inventory/stock-movement", element: <InventoryMovement /> },
    { path: "/inventory/stock-adjustment", element: <InventoryAdjust /> },
    { path: "/List-customers", element: <ListCustomer /> },
    { path: "/List-vendors", element: <ListVendors /> },
    { path: "/List-products", element: <ListProduc isOpen={isOpen} /> },
    { path: "/List-users", element: <ListUsers /> },
    { path: "/customer-categories", element: <CustomerCategory /> },
    { path: "/product-categories", element: <ProductCategory /> },
    { path: "/General-taxes", element: <GeneralTexes /> },
    { path: "/General-warehouses", element: <GeneralWarehouses /> },
    { path: "/General-custom-fields", element: <GeneralFeilds /> },
];


export default AppRoutes