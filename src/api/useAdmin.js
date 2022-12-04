import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-ten-alpha.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setisLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isloading]
}


export default useAdmin;