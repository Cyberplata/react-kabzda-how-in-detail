import { action } from '@storybook/addon-actions';

import React, {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion,
};

export const Test = () => {
    return <UncontrolledAccordion titleValue={"Uncontrolled Accordion"}/>
}