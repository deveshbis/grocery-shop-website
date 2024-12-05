"use client"
import React from 'react';
import {SessionProvider} from 'next-auth/react'

const AuthProvider = ({children}) => {
    return (
         <SessionProvider>
            {children}
         </SessionProvider> 
    );
};

export default AuthProvider;


// "use client"
// import React from 'react';

// const AuthProvider = ({children}) => {
//     return (
//         <div>
//             {children}
//         </div>
//     );
// };

// export default AuthProvider;