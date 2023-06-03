import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>O Hamburgers!</h1>
            <p>We are going to point the finger at Brian for this broken page.</p>
            <p>Error: 
                <i> {error.statusText || error.message}</i>
            </p>
        </div>
    );
}