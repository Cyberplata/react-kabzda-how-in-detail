import React, { useState } from "react";
import {ClockDimych} from "./ClockDimych";

export default {
    title: "Clock",
    component: ClockDimych
};

export const ClockContainer: React.FC = () => {

    return (
        <div>
            <ClockDimych/>
        </div>
    );
};
