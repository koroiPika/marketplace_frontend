import React, { useContext } from "react";
import MyContext from "../MyContext";

const User = () => {
    const tokenNav = localStorage.getItem("token")
    const { users, idUser } = useContext(MyContext);

    return (
        <>
            {tokenNav !== null ?
                <>
                    {users.filter((user) => user.idusuario === idUser)
                        .map((us) => (
                            <p>
                                {us.nombre}
                            </p>
                        ))}
                </> : null}
        </>
    )
}

export default User