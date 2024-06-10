import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: "Accordion",
    component: Accordion,
};

const onChangeHandler = action('onChange')
const onClickCallBack = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickCallBack}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      onChange={onChangeHandler}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Platon", value: 2},
                          {title: "Alina", value: 3},
                          {title: "Oleg", value: 4},
                      ]}
                      onClick={onClickCallBack}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Platon", value: 2},
                          {title: "Alina", value: 3},
                          {title: "Oleg", value: 4},
                      ]}
                      onClick={ (value) => {alert(`user with ID ${value} should be happy`)} }
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