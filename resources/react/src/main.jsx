import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
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
                            <div>
                                <Navigation/>
                                <Component key={key} {...props}/>
                            </div>
                        )
                    }}
                </App>
            </StrictMode>
        )
    },
})
