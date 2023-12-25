import {createBrowserRouter} from "react-router-dom"
import App from "../pages/home/App"
import { PlayerMusic } from "../pages/PlayerMusic"

const Routes =createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/player/music",
            element:<PlayerMusic/>
        }
    ]
    )
    export {Routes}