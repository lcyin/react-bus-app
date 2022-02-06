import React from "react";
import { Link } from "react-router-dom";
import { IRoute } from "../../interfaces/Route";


import { Content, Wrapper } from "./RouteInfoBar.style";

const RouteInfoBar: React.FC<IRoute> = ({route,destination,station,mins }) => (
    <Wrapper>
        <Content>
            <div className="route-info-route">
                <h1>
                    {route}
                </h1>
            </div>
            <div className="route-info-destination">
                <h1>
                    To: {destination}
                </h1>
                <p>{station}</p>
            </div>
            <div className="route-info-mins">
                <h1>{mins}</h1>
                <p>mins</p>
            </div>
        </Content>

    </Wrapper>
)

export default RouteInfoBar