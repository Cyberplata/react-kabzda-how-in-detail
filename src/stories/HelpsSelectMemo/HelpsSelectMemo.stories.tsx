import {action} from '@storybook/addon-actions';
import React, {useMemo, useState} from "react";
import {HelpsToReactMemo} from "../useMemo.stories";
// import {HelpsSelectMemo} from './HelpsSelectMemo-useMemo-ReactMemo';

export default {
    title: "HelpsSelectMemo",
    // component: HelpsSelectMemo,
};

export type IdCityType = "Russia" | "Ukraine" | "Belarus"


export type CitiesType = {
    idCity: IdCityType
    title: TitleValueType
    population: number
}

export type TitleValueType =
    "Moscow"
    | "Tula"
    | "Saint Petersburg"
    | "Kiev"
    | "Dnipro"
    | "Odesa"
    | "Minsk"
    | "Brest"
    | "Mogilev"

export const HelpsSelectMemo = () => {
    console.log('HelpsSelectMemo')
    const [counter, setCounter] = useState(0);
    const [cities, setCities] = useState<CitiesType[]>([
            {idCity: "Russia", title: "Moscow", population: 13000000},
            {idCity: "Russia", title: "Tula", population: 500000},
            {idCity: "Russia", title: "Saint Petersburg", population: 6000000},
            {idCity: "Ukraine", title: "Kiev", population: 3000000},
            {idCity: "Ukraine", title: "Dnipro", population: 970000},
            {idCity: "Ukraine", title: "Odesa", population: 1000000},
            {idCity: "Belarus", title: "Minsk", population: 2000000},
            {idCity: "Belarus", title: "Brest", population: 340000},
            {idCity: "Belarus", title: "Mogilev", population: 350000},
        ],
    );

    const filterByCountry = useMemo(() => {
        return cities.filter(c => c.idCity === "Belarus")
    }, [cities])

    const filterNameStartsLetterM = useMemo(() => {
        return cities.filter(c => c.title.startsWith("M"))
    }, [cities])

    const filterCitiesMore10Million = useMemo(() => {
        return cities.filter(c => c.population > 10000000)
    }, [cities])

    const filterCitiesLess1Million = useMemo(() => {
        return cities.filter(c => c.population < 1000000)
    }, [cities])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <div>
            <SelectMap cities={filterByCountry}/>
            <SelectMap cities={filterNameStartsLetterM}/>
            <SelectMap cities={filterCitiesMore10Million}/>
            <SelectMap cities={filterCitiesLess1Million}/>
        </div>
    </>
}

export type HelpSelectType = {
    cities: CitiesType[]
}

export const SecretSelect = (props: HelpSelectType) => {
    const {cities} = props
    console.log('Secret Select')

    return <select>
        {cities.map((c,i) => <option key={i} value="">{c.title}</option>)}
    </select>
}

const SelectMap = React.memo(SecretSelect)

