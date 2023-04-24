import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "the Title",
      date: "2023-04-10",
      description: "A gathering of friends and family",
      color: "green", // add color to the event
    },
  ]);

  const handleDateSelect = (selectInfo) => {
    const formHtml = `
      <form id="newEventForm">
        <label for="title">일정 추가:</label><br>
        <input type="text" id="title" name="title"><br>
        <label for="description">일정 내용을 입력하세요.:</label><br>
        <input type="text" id="description" name="description"><br>
        <label for="color">일정 색상을 선택하세요.:</label><br>
        <input type="checkbox" id="green" name="color" value="green">
        <label for="green">Green</label><br>
        <input type="checkbox" id="blue" name="color" value="blue">
        <label for="blue">Blue</label><br>
        <input type="checkbox" id="red" name="color" value="red">
        <label for="red">Red</label><br>
        <input type="checkbox" id="yellow" name="color" value="yellow">
        <label for="yellow">Yellow</label><br><br>
        <input type="submit" value="등록">
        <button id="cancelButton">취소</button>
      </form>
    `;
  
    const newWindow = window.open("", "Add Event", "width=500,height=400");
    newWindow.document.body.innerHTML = formHtml;
  
    newWindow.document.getElementById("newEventForm").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const title = newWindow.document.getElementById("title").value;
      const description = newWindow.document.getElementById("description").value;
      const selectedColors = newWindow.document.querySelectorAll('input[name="color"]:checked');
      const colors = Array.from(selectedColors).map((checkbox) => checkbox.value);
  
      if (title) {
        setEvents([
          ...events,
          {
            title,
            description,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            color: colors.length > 0 ? colors[0] : 'green',
          },
        ]);
  
        newWindow.close();
      }
    });
  
    newWindow.document.getElementById("cancelButton").addEventListener("click", (event) => {
      event.preventDefault();
      newWindow.close();
    });
  };
  
  
  const handleEventClick = (clickInfo) => {
    const eventEl = clickInfo.el;

    eventEl.querySelectorAll(".delete-button").forEach((btn) => {
      btn.remove();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.classList.add("delete-button");
    deleteBtn.onclick = () => {
      if (window.confirm(`삭제 합니다.'${clickInfo.event.title}'?`))
      {
        clickInfo.event.remove();
      }
    };
    eventEl.appendChild(deleteBtn);
  };

  const eventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <p>
          <h3>{eventInfo.event.title}</h3>
        </p>
        <p>{eventInfo.event.extendedProps.description}</p>
      </>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        eventContent={eventContent}
        select={(info) => handleDateSelect(info)}
        eventRemove={(info) => {
          setEvents(events.filter((event) => event !== info.event));
        }}
      />
    </div>
  );
}

export default Calendar;
