import React from "react";
import { useEffect, useState } from "react";
import {
    Text,
    View,
    Image
} from "react-native";

import globalStyles from "../styles/globalStyles"; 

import getDate from "../funcs/getDate";
import CalendarScreen from "../funcs/components/customCalendar";
// import CustomCalendarHeader from "../funcs/components/customCalendarHeader";

function Home() {
    const [date, setDate] = useState({});

    useEffect(() => {
        setDate(getDate());
        }, 
        []
    )

    return (
        <View style={globalStyles.body}>
            <View style={globalStyles.homeHeader}>
                <Image 
                    source={require("../../assets/images/logo.png")}
                    style={globalStyles.logo}
                />
                <Text 
                    style={globalStyles.appTitle}
                >
                    TaskTrackr
                </Text>
            </View>

            <View>
                <Text style={globalStyles.yearHeader}>{date.month} {date.year}</Text>
            </View>

            <View style={globalStyles.weekDaysContainer}>
                <Text style={globalStyles.weekDays}>Sun</Text>
                <Text style={globalStyles.weekDays}>Mon</Text>
                <Text style={globalStyles.weekDays}>Tue</Text>
                <Text style={globalStyles.weekDays}>Wed</Text>
                <Text style={globalStyles.weekDays}>Thu</Text>
                <Text style={globalStyles.weekDays}>Fri</Text>
                <Text style={globalStyles.weekDays}>Sat</Text>
            </View>

            <CalendarScreen year={date.year} month={date.monthNum} day={date.date}/>
        </View>
    )
}

export default Home;