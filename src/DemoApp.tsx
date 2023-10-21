import React from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { DemoAppState } from './models/redux-models'
import { CalendarSidebar } from './components/CalendarSidebar'


export default class DemoApp extends React.Component<{}, DemoAppState> {

  render() {
    return (
      <div className='demo-app'>
        <CalendarSidebar/>
        
      </div>
    )
  }

  renderHeader(){
    <div className='header-toolbar'>

    </div>
  }
}
  

  