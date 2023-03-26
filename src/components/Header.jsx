import { Button } from "@chakra-ui/react"

export const Header = ({children}) => {

    return (
    <div>
    <div className="topnav">
        <a className="" href="/">Home</a>
        <a href="/transaction">Transactions</a>
        {localStorage.getItem('auth')==null?(<p></p>):(<Button margin='2' size='sm' onClick={()=>{
            localStorage.clear()
            window.location.replace("/login")
        }}>Log out</Button>)}
    </div>
    {children}
    </div>
    )
    
}
