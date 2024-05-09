import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense ,lazy} from "react";


//초기로딩에 말고 눌렀을 때 로딩하게
const Test = lazy(()=>import("../components/Test"));

function Loading() {
    return <div>로딩중입니다.</div>
}
// Outlet에 자식요소를 가져옴
const router = createBrowserRouter([
    {
        element:(
        <Suspense fallback={<Loading/>}>
            <header>헤더</header>
            <body>
                <Outlet/>
            </body>
        </Suspense>
        ),
        children:[
            {
                path:"test",
                element:(
                <Suspense fallback={<Loading/>}>
                    <Test/>
                </Suspense>
                ),
            },
        ],
    },
])

export default router;