import React from 'react';
import SideBarAdmin from '../Components/SideBarAdmin/SideBarAdmin';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Dashboard = () => {
    return (
        <div className="d-flex">
            <SideBarAdmin />
            <ContentContainer>
            <WhiteContainer style="d-flex marginb-4 h-100 p-3">
                    <div className="w-100 sizeServices">
                        <span className="fs-4 text-lowBrown"></span>
                    </div>
                </WhiteContainer>
            </ContentContainer>
        </div>
    )
}

export default Dashboard;