import {CSidebar,CSidebarNav,CNavTitle,CNavItem,CSidebarToggler,CIcon,CBadge,CSidebarBrand,cilSpeedometer,CNavGroup,cilPuzzle} from "@coreui/react";
import { Link } from "react-router-dom";
import { logout } from "../handlers/logoutHandler";
import { useContext } from "react";
import { ThemeContext } from "../App";
import {Button} from "react-bootstrap";

const Sidebar = ()=>{

  const value= useContext(ThemeContext);
  const {theme, setTheme} = value;

  const onChangeTheme=()=>{

    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }

  }

    return(

        <CSidebar unfoldable className={(theme==="light")?"vh-100 bg-dark":"vh-100 bg-primary"} >

             <CSidebarNav>

                 <CNavItem href="#" className={ (theme==="light")?"bg-dark":"bg-primary"} >

                <i className="bi bi-bar-chart-fill text-white m-2"></i>
                  </CNavItem>

                  <CNavTitle className="text-light fw-normal">
                    A CRM Application
                  </CNavTitle>
                  
                  <CNavItem href="#">
                          <i className="bi bi-house text-white m-2"></i>

                          <Link to="/admin" className="text-decoration-none text-white mx-3" >
                            Home
                          </Link>

                    </CNavItem>

                    <div onClick={logout} >
                      <CNavItem href="#">
                          <i className="bi bi-box-arrow-left text-white m-2"></i>
                          <div className="text-decoration-none text-white mx-3">
                            Logout
                          </div>
                        </CNavItem>

                    

                    </div>


                        <span className="mx-3">
                          Current Theme : {theme}
                          <Button onClick={onChangeTheme} className="mx-3">Change Theme </Button>
                        </span>
                        


              
                         </CSidebarNav>
                         <CSidebarToggler />
                         </CSidebar>
        
    )

}

export default Sidebar;