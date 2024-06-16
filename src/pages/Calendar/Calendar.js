import React, { useState, useEffect  } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // 플러그인 추가
import './Calendar.css';

function CalendarComponent() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isQuestVisible, setIsQuestVisible] = useState(true); // 패널 가시성 상태

  const events = [
    { title: 'event 1', date: '2024-06-01' },
    { title: 'event 2', date: '2024-06-02' },
    { title: 'event 3', date: '2024-06-02' },
    { title: 'event 4', date: '2024-06-03' }
  ];

  // 컴포넌트 마운트 시 현재 날짜로 selectedDate 초기화
  useEffect(() => {
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localDate = new Date(today.getTime() - offset * 60 * 1000);
    const formattedDate = localDate.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }, []);
  
  const handleDateClick = (info) => {
    console.log('Clicked on: ' + info.dateStr);
    const filteredEvents = events.filter(event => event.date === info.dateStr);
    setSelectedEvents(filteredEvents);
    setSelectedDate(info.dateStr);
    
    // 로그로 필터된 이벤트 리스트 출력
    // console.log('Events on ' + info.dateStr + ':', filteredEvents);
  };

  const toggleQuestVisibility = () => {
    setIsQuestVisible(!isQuestVisible);
  };

  return (
    <div className="container">
      <button onClick={toggleQuestVisibility} className="toggle-button">
        {isQuestVisible ? '접기' : '펼치기'}
      </button>
      {isQuestVisible && (
        <div className='quest'>
          <h2>.</h2>
          <p className='quest-test'>ㅁ</p>
          {/* Add your task management component or logic here */}
        </div>
      )}
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick} // dateClick 이벤트 핸들러 설정
        />
      </div>
      <div className="dashboard">
        <h2>Selected Date: {selectedDate}</h2>
        {selectedEvents.length > 0 ? (
          <ul>
            {selectedEvents.map((event, index) => (
              <li key={index}>{event.title}</li>
            ))}
          </ul>
        ) : (
          <p>No events for the selected date</p>
        )}
      </div>
    </div>
  );
}

export default CalendarComponent;
