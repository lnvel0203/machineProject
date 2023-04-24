import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import Box from "@mui/material/Box";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    margin: "0",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f2f2f2",
  },
};

function CalenderTest() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDetail, setEventDetail] = useState("");
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleDateSelect = (arg) => {
    setEventStart(arg.start);
    setEventEnd(arg.end);
    const mousePosX = arg.jsEvent.clientX;
    const mousePosY = arg.jsEvent.clientY;
    setModalPosition({ x: mousePosX, y: mousePosY });
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setEventTitle("");
    setEventDetail("");
    setEventStart(null);
    setEventEnd(null);
    setModalIsOpen(false);
  };

  const handleModalSubmit = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent({
      title: eventTitle,
      detail: eventDetail,
      start: eventStart,
      end: eventEnd,
    });

    handleModalClose();
  };

  const handleEventTitleChange = (event) => {
    setEventTitle(event.target.value);
  };
  const handleEventDetailChange = (event) => {
    setEventDetail(event.target.value);
  };

  const calendarRef = React.createRef();

  return (
    <Box display={"flex"}>
      <Box width={90}>.</Box>
      <Box width={"100%"} mr={2} mb={2}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          selectable={true}
          select={handleDateSelect}
          events={[
            {
              title: "eventh",
              date: "2023-04-10",
              description: "A gathering of friends and family",
            },
          ]}
        />

        {modalIsOpen && (
          <div
            style={{
              position: "absolute",
              top: modalPosition.y,
              left: modalPosition.x,
              zIndex: 999,
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2>일정추가</h2>
            <p>
              시작: {eventStart?.toLocaleString()} <br />
              끝: {eventEnd?.toLocaleString()}
            </p>
            <form>
              <div>
                <label>
                  제목:
                  <input
                    type="text"
                    value={eventTitle}
                    onChange={handleEventTitleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  내용:
                  <input
                    type="text"
                    value={eventDetail}
                    onChange={handleEventDetailChange}
                  />
                </label>
              </div>
            </form>
            <br />
            <button onClick={handleModalSubmit}>저장</button>
            <button onClick={handleModalClose}>취소</button>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default CalenderTest;
