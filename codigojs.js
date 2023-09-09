$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      events: [
        {
          title: 'Consulta com Cliente A',
          start: '2023-06-15T10:00:00',
          end: '2023-06-15T11:00:00'
        },
        {
          title: 'Consulta com Cliente B',
          start: '2023-06-16T14:30:00',
          end: '2023-06-16T15:30:00'
        }
        // Adicione mais eventos de consultas aqui
      ]
    });
  });
  