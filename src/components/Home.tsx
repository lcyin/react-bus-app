import React from "react";
import ReactList from 'react-list';
import { IRouteList } from "../interfaces/Route";

import  Header  from './Header'
import NavBar from "./Navbar";
import RouteInfoBar from "./RouteInfoBar";

export const dumpdata1: IRouteList = [
    {
      route: "296C",
      destination: "Sheung Tak",
      station: "Cheung Sha Wan Bus Station",
      mins: 1,
    },
    {
      route: "296C",
      destination: "Sheung Tak",
      station: "Cheung Sha Wan Bus Station",
      mins: 1,
    },
    {
      route: "296C",
      destination: "Sheung Tak",
      station: "Cheung Sha Wan Bus Station",
      mins: 1,
    },
    {
      route: "296C",
      destination: "Sheung Tak",
      station: "Cheung Sha Wan Bus Station",
      mins: 1,
    },
    {
      route: "296C",
      destination: "Sheung Tak",
      station: "Cheung Sha Wan Bus Station",
      mins: 1,
    },
  ];
  
  const renderItem = (index:any, key:any) => {
    return   <RouteInfoBar key={key}  route={dumpdata1[index].route} destination={dumpdata1[index].destination} station={dumpdata1[index].station} mins={dumpdata1[index].mins} />;
  }
  renderItem.toJSON = () => renderItem.toString();
const Home = () => {



    return (
        <>
            <Header title="Bus App" />
            <div style={{overflow: 'auto', maxHeight: 500}}>
              <ReactList
                itemRenderer={renderItem}
                length={dumpdata1.length}
                type='uniform'
              />
            </div>
            <NavBar/>
        </>

    )
}

export default Home