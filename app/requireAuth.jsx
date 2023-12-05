
import React from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
export default function requireAuth(WrappedComponent) {

  return (props) => {
    

    const authToken = Cookies.get("accessToken")
    if (!authToken) {
      return <div className='w-full h-full flex justify-center items-center bg-transparent mt-20 mb-20 text-5xl'>Vui lòng đăng nhập để xem</div>
        } else{
          const decodeToken = jwtDecode(authToken);
          const exp = decodeToken.exp;
          const currentTime = Date.now()/1000;
          if( exp > currentTime){
            return <WrappedComponent {...props} />
          }
          else {
            return <div className='w-full h-full flex justify-center items-center bg-transparent mt-20 mb-20 text-5xl'>Vui lòng đăng nhập để xem</div>
          }

        }



  }

}