import React from 'react'
import style from "../CSS/profile.module.css"
function Profile({serial,name,work}) {
    return (
        <div>
            <table className={style.first}>
                <thead>
                    <tr>
                        <th>
                            s.no
                        </th>
                        <th>name</th>
                        <th>work</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{serial}</td>
                        <td>{name}</td>
                        <td>{work}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile
