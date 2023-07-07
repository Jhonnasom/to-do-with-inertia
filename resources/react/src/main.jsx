import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
import './index.css'
import Navigation from "./components/Navigation.jsx";

createInertiaApp({
    resolve: name => {
        // Se quita el eager para que solo se cargue el componente cuando se necesite
        const pages = import.meta.glob('./Pages/**/*.jsx')
        return pages[`./Pages/${name}.jsx`]()
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <App {...props}>
                    {({Component,key,props})=>{
                        return (
                            <div className="bg-gray-100 min-h-screen flex">
                                <Navigation/>
                                <div className="flex-1 bg-white mt-2 rounded-tl-lg shadow-md px-32 py-4">
                                    <Component key={key} {...props}/>
                                </div>
                            </div>
                        )
                    }}
                </App>
            </StrictMode>
        )
    },
})
