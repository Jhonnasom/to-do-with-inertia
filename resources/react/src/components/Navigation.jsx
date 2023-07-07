import NavigationLink from "./NavigationLink.jsx";
export default function Navigation(){
    return(
        <div className="w-[320px] flex flex-col gap-y-4 py-6 px-4">
            <NavigationLink href="/products">Products</NavigationLink>
            {/*<NavigationLink href="/todos">Todos</NavigationLink>*/}
        </div>
    )

}
