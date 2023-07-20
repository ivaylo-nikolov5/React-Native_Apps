import React from 'react';
import { View } from 'react-native';
import { Calendar} from 'react-native-calendars';

function CalendarScreen(props) {
  const m = String(props.month).padStart(2, "0");
  const d = String(props.day).padStart(2, "0");
  const today = `${props.year}-${m}-${d}`;

  const customTheme = {
    calendarBackground: '#cfcfcf',
    dayTextColor: '#000',
    todayTextColor: '#000',
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#cfcfcf', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: 300, backgroundColor: '#cfcfcf' }}>
        <Calendar
          hideDayNames={true}
          hideExtraDays={true}
          renderArrow={() => null}
          renderHeader={() => null}
          theme={customTheme}
          markedDates={{ [today]: { marked: true, dotColor: "#3370ff",  } }} // Wrap today variable in square brackets
        />
      </View>
    </View>
  );
}

export default CalendarScreen;
