
const userToken = email => {
    fetch(`https://doctors-portal-server-ten-alpha.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('AccessToken', data.accessToken);
            }
        });
}

export default userToken;











// import { useEffect, useState } from "react";

// const userToken = email => {
//     const [token, setToken] = useState('');

//     useEffect(() => {
//         if (email) {
//             fetch(`https://doctors-portal-server-ten-alpha.vercel.app/jwt?email=${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.accessToken) {
//                         localStorage.setItem('AccessToken', data.accessToken);
//                         setToken(data.accessToken)
//                     }
//                 });
//         }
//     }, [email]);
//     return [token]
// }

// export default userToken;