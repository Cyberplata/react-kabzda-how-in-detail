import type {Meta, StoryObj} from '@storybook/react';

import Accordion from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: "hello",
        collapsed: true
    },
};

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={() => {
                          console.log('on change')
                      }}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      onChange={() => {}}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
    />
}

// type Story = StoryObj<typeof Accordion>;
//
// export const Default: Story = {
//     args: {
//         dataType: 'latency',
//         showHistogramLabels: true,
//         histogramAccentColor: '#1EA7FD',
//         label: 'Latency distribution',
//     },
// };