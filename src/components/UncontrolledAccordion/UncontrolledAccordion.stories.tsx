import { action } from '@storybook/addon-actions';

import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion,
};

export const TestUncontrolledAccordion = () => {
    return <UncontrolledAccordion titleValue={"Uncontrolled Accordion"}/>
}