// App.js 또는 필요한 컴포넌트 파일
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

function App() {
    return (
    <div>
        <div className='Quest'>
        
        </div>

        <div className="App">
            <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'event 1', date: '2024-06-01' },
                { title: 'event 2', date: '2024-06-02' }
            ]}
            />
        </div>


    </div>

    );
}

export default App;
