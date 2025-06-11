import Main from "./body";
import Header from "./header";


export default function Container() {
    return(
    // there's no need for the fragment here i.e. <></> since we're only returning one element i.e. <CartDesign></CartDesign>
        <>
        <Header />
        <Main />
        </>
    )
}