import { Link ,usePage} from "@inertiajs/react";
export default function NavigationLink(props){
    const page= usePage()
    return(
        <Link {...props} className="text-gray-500 data-[active]:text-gray-700 font-semibold"
              data-active={page.url.includes(props.href)?true:undefined}/>
    )
}
