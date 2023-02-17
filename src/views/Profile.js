import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
const params = useParams();

return(
    <div>
        <h1>Hola, soy profile {params.id}</h1>
    </div>
)
};
export default Profile;